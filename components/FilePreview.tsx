import React, { useState } from 'react'

interface FilePreviewProps {
  fileData: {
    fileList: Array<{
      lastModified: number
      name: string
    }>
  }
}

const FilePreview: React.FC<FilePreviewProps> = ({ fileData }) => {
  const [selectedFileIndices, setSelectedFileIndices] = useState<number[]>([])

  const handleCheckboxChange = (index: number) => {
    if (selectedFileIndices.includes(index)) {
      setSelectedFileIndices(selectedFileIndices.filter((i) => i !== index))
    } else {
      setSelectedFileIndices([...selectedFileIndices, index])
    }
  }

  const handleDeleteSelectedFile = () => {
    if (selectedFileIndices.length > 0) {
      const updatedFileList = fileData.fileList.filter(
        (_, index) => !selectedFileIndices.includes(index),
      )
      fileData.fileList = updatedFileList
      setSelectedFileIndices([])
    }
  }

  const isDeleteButtonDisabled = selectedFileIndices.length === 0

  return (
    <div className="flex flex-col items-center  m-1 w-400">
      <div className="grid grid-cols-1 text-left">
        {fileData.fileList.map((f, index) => {
          return (
            <ol key={f.lastModified}>
              <li
                className={`p-2 ${
                  selectedFileIndices.includes(index) ? 'selected' : ''
                }`}
              >
                <div key={f.name} className="text-gray-500 text-right">
                  {f.name}
                  <input
                    type="checkbox"
                    className="ml-3 text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900"
                    checked={selectedFileIndices.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span>Delete</span>
                </div>
              </li>
            </ol>
          )
        })}
      </div>
      {!isDeleteButtonDisabled && (
        <button
          className=" text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900"
          onClick={handleDeleteSelectedFile}
        >
          Delete Selected File
        </button>
      )}
    </div>
  )
}

export default FilePreview
