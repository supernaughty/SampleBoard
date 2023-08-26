import {connectDB} from "@/util/database";

export default async function Home() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    console.log({result})

    return (
        <div>{
            (result as any[]).map((eachResult) => {
                return <>
                    <div>{eachResult.title}</div>
                    <div>{eachResult.content}</div>
                </>
            })
        }</div>
    )
}
