import React, { useState } from 'react'
import Image from 'next/image'
import FilePreview from './FilePreview'
import styles from '../styles/DropZone.module.css'

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
      files = files.filter((f) => !existingFiles.includes(f.name))

      dispatch({ type: 'ADD_FILE_TO_LIST', files })
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = [...e.target.files]

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name)
      files = files.filter((f) => !existingFiles.includes(f.name))

      dispatch({ type: 'ADD_FILE_TO_LIST', files })
    }
  }

  const uploadFiles = async () => {
    let files = data.fileList
    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))

    const response = await fetch('/api/finance', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      alert('Files uploaded successfully')
    } else {
      alert('Error uploading files')
    }
  }

  return (
    <div className="px-20">
      <div
        className={styles.dropzone}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <Image src="/upload.svg" alt="upload" height={50} width={50} />

        <input
          id="fileSelect"
          type="file"
          multiple
          className={styles.files}
          onChange={(e) => handleFileSelect(e)}
        />
        <label htmlFor="fileSelect">You can select multiple Files</label>

        <h3 className={styles.uploadMessage}>
          or drag &amp; drop your files here
        </h3>
      </div>
      <FilePreview fileData={data} />
      {data.fileList.length > 0 && (
        <button className={styles.uploadBtn} onClick={uploadFiles}>
          Upload
        </button>
      )}
    </div>
  )
}

export default DropZone
