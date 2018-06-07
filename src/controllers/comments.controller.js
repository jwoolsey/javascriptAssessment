class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    //Trigger function on form submit
    var comment = this.comments;
    for (var i=0; i <= comment.length; i++) {
      comment[i].addEventListener('submit', newComment, false);

      function newComment (comment) {
        event.preventDefault();
        //Grab imageId + comment and create new variable
        var imageId = parseInt($(this).parents('h2').next('ul').data('id'));
        comment = $(this).parents('ul').find('.commentContent').value;
        var commentObj = new Comment(imageId, comment);

        return commentObj;
      }
      this.render(commentObj);
    }
  }
}
