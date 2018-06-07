// create Comment class here
class Comment {
  constructor(text, imageId) {
    this.id = this.constructor.all.length;
    this.image = this.findImage(imageId);
    this.text = text;
    this.constructor.all.push(this);
  }

  findImage(imageId) {
    // given int, return image object
    let imgObj = Image.all.find(image => image.id === Number(imageId));
    //add current comment to image comments before return
    image.comments.push(this);
    return imgObj;
  }

  commentEl() {
    //return str html, has 'li' with 'id' + comment
    return `<li id='comment-${this.id}'>${this.text}</li>`;
  }
}

Comment.all = [];
