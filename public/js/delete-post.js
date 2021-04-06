async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
      //delete method to delete the post
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),
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
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
