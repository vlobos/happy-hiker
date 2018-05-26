import React from 'react';


class Reviews extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="reviewcomponent">
        <div>
          This is a fantastic review!
          {/* {this.props.reviews.map((review, index) => {
            return <li> Here is a Review </li>
          })} */}
        </div>
        <form action="/my-handling-form-page" method="post">
          <div>
            <textarea id="msg" name="user_message"></textarea>
          </div>
        </form>
        <div class="button">
          <button type="submit">Send your message</button>
        </div>
      </div>
    )
  }

}

export default Reviews;
//{review}

