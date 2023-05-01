const asyncfunction = async() => {
    const Post = ('I have joy')
    try{
        const newPost = await Post;
        console.log(newPost);
    }catch(err) {
        console.log(err)
    }

}
asyncfunction()