let posts = [];

//get all post
export const getAllPosts = (req, res) => {
  res.render("index", { posts });
};

//show new post form
export const getNewPostForm = (req, res) => {
  res.render("new", { posts });
};

//create a new post
export const createPost = (req, res) => {
    const newPost = {
        id: Date.now().toString(),
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newPost);
    res.redirect("/");
};

//show edit post form
export const getEditPostForm = (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.render("edit", { post });
};

// update post
export const updatePost = (req, res) => {
    const postIndex = posts.findIndex((p) => p.id === req.params.id);

    if (postIndex != -1) {
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
    }
     
    res.redirect("/"); 
};

//Delete post
export const deletePost = (req, res) => {
    posts = posts.filter((p) => p.id !== req.params.id);
    res.redirect("/");
}