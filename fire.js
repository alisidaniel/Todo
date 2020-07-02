
import firebase from "firebase"; 
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA381NWPLKUc44wBiTSLIPYkkyh0OmzBsM",
    authDomain: "todo-78ef7.firebaseapp.com",
    databaseURL: "https://todo-78ef7.firebaseio.com",
    projectId: "todo-78ef7",
    storageBucket: "todo-78ef7.appspot.com",
    messagingSenderId: "163193987869",
    appId: "1:163193987869:web:9286054b3e9dcdc0b277f4"
  };

class Fire {
    constructor(callback){
        this.init(callback);
    }

    init(callback){
        if (!firebase.apps.length){

            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user){
                callback(null, user)
            }else{
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error)
                });
            }
        })
    }

    getLists(callback){
        let ref = this.ref.orderBy("name");
        
        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc=> {
                lists.push({id: doc.id, ...doc.data()})
            });

            callback(lists);
        })
    }

    addList(list){

        let ref = this.ref;

        ref.add(list);
    }

    updateList(list){

        let ref =this.ref;

        ref.doc(list.id).update(list); 
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref(){
        return firebase.firestore().collection("users").doc(this.userId).collection("lists");
    }

    detach(){
        this.unsubscribe();
    }
}

export default Fire;