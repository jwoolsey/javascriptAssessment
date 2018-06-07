class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    //event.preventDefault();
    // create comment form listener code here
    //Trigger function on form submit
    document.getElementById('add-comment').addEventListener('submit', newComment, false);

    function newComment (comment) {
      //Grab imageId + comment and create new variable
      let image = $(this).closest('.image');
      let imageId = Number(image.find('ul').attr('data-id'));
      let comment = $(this).find('.commentContent').value;
      let commentObj = new Comment(imageId, comment);
      return commentObj;
      }
    }

  render(commentObj) {
    //Choose correct 'ul' and append to it
    const commentList = $('#comments-${commentObj.ImageId}');
    commentList.append(commentObj.commentEl());
  }
}
