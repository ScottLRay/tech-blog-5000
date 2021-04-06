async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();
  console.log(title);
  console.log(content);

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
      //put method to update the post
    method: "PUT",
    body: JSON.stringify({
      post_id: id,
      title,
      content,
    }),
    //the header info
    headers: {
      "Content-Type": "application/json",
    },
  });
// if good need to reload the page
  if (response.ok) {
    document.location.replace("/dashboard/");
    //if not send an error
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
