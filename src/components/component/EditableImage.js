import Image from "next/image";

export default function EditableImage ({link, setLink}) {
    
    async function handleFileChange(ev){
        const files = ev.target.files;
        if(files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                if(response.ok) {
                    return response.json().then(link => {
                        setLink(link);
                    })
                }
                throw new Error('Something went wrong');
            });
        }
    }

    return (
        <>
            <div>
                {link && (
                    <Image 
                        className="rounded-lg w-full h-full mb-1"
                        src={link}
                        width={250}
                        height={250}
                        alt={'avatar'}
                    />
                )}
            </div>
        </>
    );
}