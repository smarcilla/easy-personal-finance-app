import React, { useState } from 'react'
import XLSX from 'xlsx'
import Papa from 'papaparse'
import Link from 'next/link'

interface DataShape {
  Date: string
  Concept: string
  Movement: string
  Amount: number
  Notes: string
  prevState: null
}

const FileUploader = () => {
  const [fileData, setFileData] = useState<DataShape | null>(null)

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    if (file.name.endsWith('.json')) {
      reader.onload = (e: any) => {
        const jsonData = JSON.parse(e.target.result)
        setFileData(jsonData)
      }
      reader.readAsText(file)
    } else if (file.name.endsWith('.xlsx')) {
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const xlsxData: any = XLSX.utils.sheet_to_json(worksheet)
        setFileData(xlsxData)
      }
      reader.readAsArrayBuffer(file)
    } else if (file.name.endsWith('.csv')) {
      Papa.parse(file, {
        header: true,
        complete: (results: { data: DataShape[] }) => {
          setFileData(results.data)
        },
      })
    }
  }

  return (
    <div className="relative">
      <nav className="bg-gray-800 p-6 min-w-full">
        <Link href="/" className="text-white font-medium mr-6">
          Home
        </Link>
        <input
          type="file"
          onChange={handleFileUpload}
          className="py-2 px-3 max-w-full rounded bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:shadow-outline-blue active:bg-gray-400"
        />
      </nav>
      {fileData && (
        <pre className="min-w-full">{JSON.stringify(fileData, null, 2)}</pre>
      )}
    </div>
  )
}

export default FileUploader
