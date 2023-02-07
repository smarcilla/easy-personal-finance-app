interface FilePreviewProps {
  fileData: {
    fileList: Array<{
      lastModified: number
      name: string
    }>
  }
}

const FilePreview: React.FC<FilePreviewProps> = ({ fileData }) => {
  return (
    <div className="flex flex-col items-center gap-1 m-1 w-400">
      <div className="flex items-center">
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
            <ol key={f.lastModified}>
              <li className="p-2">
                {/* display the filename and type */}
                <div key={f.name} className="text-gray-500">
                  {f.name}
                </div>
              </li>
            </ol>
          )
        })}
      </div>
    </div>
  )
}

export default FilePreview
