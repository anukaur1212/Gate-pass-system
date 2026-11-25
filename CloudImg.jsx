
import React, { useState, useEffect } from 'react';
import { BASE_URL } from './src/Share/VisitorEntry/VisitorApi/PostVisitor';
import CloudGetImg from './src/CloudGetImg';
import { Upload } from 'lucide-react';

const CloudImg = () => {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false)

    // Get existing PDFs
    const getFiles = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/image/images`);
        const result = await response.json();

        if (response.ok && Array.isArray(result.data)) {
            setFiles(result.data);
        } else {
            setFiles([]);
            console.log("API response:", result);
        }
    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {
        getFiles();
    }, []);

    // Select existing PDF
    const handleSelect = (e) => {
        const selected = files.find(
            item => String(item.id) === e.target.value
        );

        setSelectedFile(selected || null);
        setFileUrl(selected?.pdf_url || null);

        console.log("Selected ID:", selected?.id);
        console.log("Public ID:", selected?.public_id);
    };

    // Update existing PDF
    const updateFile = async () => {
        if (!file || !selectedFile) {
            alert("Select a PDF and existing file");
            return;
        }

        const formData = new FormData();
        formData.append("pdf", file);

        try {
            const response = await fetch(
                `${BASE_URL}/api/image/update/${selectedFile.id}`,
                {
                    method: "PUT",
                    body: formData
                }
            );

            const result = await response.json();

            if (!response.ok) {
                alert(result.message);
                return;
            }

           setFileUrl(result.data.pdf_url);
            alert("PDF updated successfully!");

           await getFiles();
        } catch (error) {
            console.log(error);
        }
    };


    // Upload new PDF
    const upload = async () => {
        try {

            if (!file) {
                alert("Please select a PDF");
                return;
            }
            setLoading(true)


            const formData = new FormData();
            formData.append("pdf", file);
            console.log(formData)

            const response = await fetch(
                `${BASE_URL}/api/image/upload`,
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            setLoading(false);

            if (!response.ok) {
                alert(result.message);
                return;
            }

            setFileUrl(result.fileUrl);
            alert("PDF uploaded successfully!");

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <form className="m-20 border p-6 rounded-xl w-100 flex flex-col items-center">
                <label className="text-xl font-bold">
                    Cloudinary PDF Handler
                </label>

                <br /><br />

                <select
                    className="border p-2 rounded w-full"
                    value={selectedFile?.id || ""}
                    onChange={handleSelect}>

                    <option className='h-30' value="">Select existing PDF</option>

                    {files?.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.public_id}
                        </option>
                    ))}
                </select>

                <br />

                <div className='relative w-full'>
                    <input
                        type="file"
                        className="border px-3 py-2 rounded h-30 w-full"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    {loading ? "Loading...." : <Upload className='absolute translate-x-1/2 translate-y-1/2 top-10 left-28' />}

                </div>

                <br />

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={updateFile}
                        className="border px-3 py-2 rounded-xl bg-blue-200"
                    >
                        Update
                    </button>

                    <button
                        type="button"
                        onClick={upload}
                        className="border px-3 py-2 rounded-xl bg-blue-200"
                    >
                        Upload
                    </button>
                </div>
            </form>

            <CloudGetImg fileUrl={fileUrl} />
        </>
    );
};

export default CloudImg;
