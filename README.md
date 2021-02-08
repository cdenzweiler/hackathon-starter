# Overview

Starter code for the Social App capstone project. See my.kenzie for details.

----------------------------
<br>

## Getting Started

<!-- 1. Go to the profile page `pages/Profile.js` -->
2. Add new components in the `render` method
3. Review the example component, Messages `components/messages/Messages.js`
4. Take note of the `withAsyncAction` function
    * All new components will require this import `import { withAsyncAction } from "../../redux/HOCs";`
    * All new components will require this export `export default withAsyncAction("profile", "all”)({COMPONENT CLASS NAME});`
      * `{COMPONENT CLASS NAME}` will be the components class name. ex. is in `components/messages/Messages.js`
      * `"profile"` fetches all profile methods
      * `"all"` is for every action, this string will also allow you to select an individual method ex. `'getMessage'`, `'addLike'`

----------------------------
<br>

## Methods and Access

<br>

### Messages

Get Messages

* `this.props.getMessage(username, limit (optional))`
  * `username`: string, this.props.username
  * `limit`: number, how many messages

Add New Message

* `this.props.createMessage(text)`
  * `text`: string, this is the message

Delete specific message

* `this.props.deleteMessage(messageId)`
  * `messageId`: the id for the individual message

### Likes

Add like for a message

* `this.props.addLike(messageId)`
  * `messageId`: the id for the individual message

Remove a like

* `this.props.removeLike(likeId)`
  * `likeId`: this is the id for the individual like

### Pictures

Get User Picture

* `this.props.getPicture(username)`
  * `username`: string, `this.props.username`

Set User Picture

* `this.props.setPicture(username, picture)`
  * `username`: string, this.props.username
  * `picture`: `event.target.files[0]`
  * see below for additional notes

----------------------------
<br>

## Additional Notes

* When using each method, utilize the .then and .catch methods.
  * `.then()` is for a successful response
  * `.catch()` is for an error
  * see `Messages.js` `fetchMessages` or `newMessageHandler` for example
* If/When you set a **picture**, use the `files` object returned from an `input` with `type='file'`
  * `event.target.files[0]`
