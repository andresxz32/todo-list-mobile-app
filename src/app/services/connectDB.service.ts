import { assert } from "console";
import * as Realm from "realm-web";


const app: Realm.App = new Realm.App({ id: "todo-list-bqonj" });

async function loginAnonymous() {
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id)
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
  
  loginAnonymous().then(user => {
    console.log("Successfully logged in!", user)
  })
