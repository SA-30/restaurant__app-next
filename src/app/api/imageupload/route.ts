// import { connectMongoDB } from "@/db/db";
// import { UploadImage } from "@/lib/upload-image";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: any){
//     try {
//         const formData = await req.formData();

//         const image = formData.get("image") as unknown as File;

//         console.log("image -> ",image);
//         const data = await UploadImage(image)
        
//         return NextResponse.json({message: "Image is added."}, {status: 201});
//     } catch (error) {
//         return NextResponse.json({message: "Failed to add the image."}, {status: 500});
//     }
// }
