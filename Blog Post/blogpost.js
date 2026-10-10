const createPost = (getTitle, getContent) => {
    const blogList = document.getElementById("blog-list")

    const post = document.createElement("div")
    post.classList.add("post")

    const postHeader = document.createElement("div")
    postHeader.classList.add("post-header")

    const postTitle = document.createElement("h2")
    postTitle.textContent = getTitle

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement)
    })

    postHeader.appendChild(postTitle)
    postHeader.appendChild(editTitleBtn)

    const postContent = document.createElement("p")
    postContent.textContent = getContent

    const postActions = document.createElement("div")
    postActions.classList.add("post-actions")

    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        
        editContent(e.target.parentElement.parentElement)
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", (e) => {
        
        deletePost(e.target.parentElement.parentElement)
    })

    postActions.appendChild(editContentBtn)
    postActions.appendChild(deleteBtn)

    post.appendChild(postHeader)
    post.appendChild(postContent)
    post.appendChild(postActions)
    blogList.appendChild(post)
}

const addPost = () => {
    const getTitle = prompt("Enter the blog post title:")
    if (!getTitle) return // user cancelled or left it empty

    const getContent = prompt("Enter the blog post content:")
    if (!getContent) return

    createPost(getTitle, getContent)
}

const editTitle = (header) => {
    const titleElement = header.firstChild
    const newTitle = prompt("Input the updated title:", titleElement.textContent)

    if (newTitle) {
        titleElement.textContent = newTitle
    }
}

const editContent = (post) => {
    const contentElement = post.childNodes[1]
    const newContent = prompt("Input the updated content:", contentElement.textContent)

    if (newContent) {
        contentElement.textContent = newContent
    }
}

const deletePost = (post) => {
    const postTitle = post.firstChild.firstChild.textContent
    const toDelete = confirm(`Are you sure you want to delete "${postTitle}"?`)

    if (toDelete) {
        post.remove()
        alert(`Post "${postTitle}" deleted successfully`)
    }
}

window.onload = () => {
    // initial data
    let postList = [
        {
            title: "Welcome to My Blog",
            content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"
        },
        {
            title: "Learning JavaScript",
            content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
        },
        {
            title: "Web Development Tips",
            content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
        }
    ]
    postList.map((post) => createPost(post.title, post.content))

    let addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addPost)
}