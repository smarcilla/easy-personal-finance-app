import React from 'react'
import Image from 'next/image'
import FilePreview from './FilePreview'
import { toast } from 'react-toastify'

interface Props {
  data: any
  dispatch: any
}

const DropZone: React.FC<Props> = ({ data, dispatch }) => {
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    let files = [...e.dataTransfer.files]

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name)
      files = files.filter(
        (f) =>
          !existingFiles.includes(f.name) &&
          (f.name.endsWith('.json') || f.name.endsWith('.csv')),
      )

      dispatch({ type: 'ADD_FILE_TO_LIST', files })
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
      if (files.length === 0) {
        toast("Error: Only '.json' or '.csv' files are accepted.", {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'bottom-right',
        })
        return
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = [...e.target.files]

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name)
      files = files.filter(
        (f) =>
          !existingFiles.includes(f.name) &&
          (f.name.endsWith('.json') || f.name.endsWith('.csv')),
      )

      dispatch({ type: 'ADD_FILE_TO_LIST', files })
    }
    if (files.length === 0) {
      toast("Error: Only '.json' or '.csv' files are accepted.", {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-right',
      })
      return
    }
  }

  const uploadFiles = async () => {
    let files = data.fileList

    const formData = new FormData()

    files.forEach((file: File, index: number) =>
      formData.append(`file_${index}`, file),
    )

    const response = await fetch('/api/transactions', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      toast('Files uploaded successfully', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
        position: 'bottom-right',
      })
    } else {
      toast('Error uploading files', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-right',
      })
    }
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-dashed border-2 border-blue-300 rounded-lg mt-6 mb-6 ml-20 mr-20 p-3"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <Image
          src="/upload.svg"
          alt="upload"
          height={50}
          width={50}
          className="mt-3"
        />

        <input
          id="fileSelect"
          type="file"
          accept=".json,.csv"
          className="hidden"
          onChange={(e) => handleFileSelect(e)}
        />
        <label
          className="mt-3 py-2 px-4 bg-blue-500 rounded-lg text-white cursor-pointer hover:bg-blue-600 hover:text-white"
          htmlFor="fileSelect"
        >
          You can select multiple Files
        </label>

        <h3 className="mt-6 text-center">or drag &amp; drop your files here</h3>
      </div>
      <FilePreview fileData={data} />
      <div className="text-center">
        {data.fileList.length > 0 && (
          <>
            <button
              className="w-auto text-white mt-5  hover:bg-blue-600 bg-blue-500 rounded-lg cursor-pointer px-4 py-2"
              onClick={uploadFiles}
            >
              Upload
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default DropZone
