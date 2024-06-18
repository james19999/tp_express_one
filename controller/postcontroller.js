let posts=[
    {id:1,name:"toto"},
    {id:2,name:"titi"},
    {id:3,name:"mémé"},
];
export const getPosts = (req,res ,next)=>{
    //Utilisation de query string pagination
    const limit= parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
      res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
}

export const getPost =(req,res,next)=>{
    //convert to id de params id
    const id=parseInt (req.params.id);
    //GET A SPECIFIC POST 
    const post=posts.find((post)=>post.id==id);
    if(!post){
        const error=new Error("Post not found")
        error.status=404
        return next(error);
    }else{
        //FILTER TO GET A SPECIFIC POST
        res.status(200).json(posts.filter((post)=>post.id==id));
    }
}


export  const creatPost= (req,res,next)=>{
    console.log(req.body);
    const newpost={
        id:posts.length+1,
        name:req.body.name
    }
     if(!newpost.name){
        const error=new Error("Post NAME ")
        error.status=404
        return next(error);
     } 
    posts.push(newpost);
    res.status(201).json(posts);
}

export const deletePost =(req,res,next)=>{
    const id =parseInt(req.params.id);
    const post=posts.find((post)=>post.id==id);
    if(!post){
        const error=new Error("Post not delete ")
        error.status=404
        return next(error);
    }
   const posts= posts.filter((post)=>post.id !==id)
   res.status(200).json({message:'post deleted'})
}


export  const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id==id);
    if (!post) {
        const error=new Error("Post not found")
        error.status=404
        return next(error);
    }
   post.name=req.body.name
   res.status(200).json({message:'post update'})

}