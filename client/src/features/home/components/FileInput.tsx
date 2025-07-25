import { useState } from "react"


export default function FileInput() {

    const [isDragged, setIsDragged] = useState<boolean>(false)

    const wrapperClasses = `absolute w-3/4 h-3/4 bg-white/20 rounded-4xl \
    top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center z-1 \
    border-5 border-dashed border-white/30 transition ${!isDragged && "opacity-0"}`
    const spanClasses = "text-white font-bold tracking-wider text-3xl"

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragged(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const droppedFiles = e.dataTransfer?.files
        setIsDragged(false)
    }

    return (
        <div 
            className={wrapperClasses}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <span className={spanClasses}>Drop a video within the field.</span>
        </div>
    )
}