// import firebase from "./firebase.config";

// const getTasksList = async classID => {
//   try {
//     await firebase
//       .database()
//       .ref(`classTasks/${classID}/`)
//       .on("value", snap => {
//         if (snap.val()) {
//           let tmp = [];
//           Object.values(snap.val()).forEach((taskContent, index) => {
//             let taskIdsArray = Object.keys(snap.val());
//             if (taskContent.creationDate) {
//               tmp.push({
//                 taskContent,
//                 taskID: taskIdsArray[index],
//               });
//             }
//           });
//           tmp.sort((a, b) => {
//             return (
//               new Date(b.taskContent.creationDate) -
//               new Date(a.taskContent.creationDate)
//             );
//           });
//           console.log(tmp);
//           console.log(snap.val());
//           console.log(snap.val().doneTasks);
//           //   commit("setTasksList", {
//           //     list: tmp,
//           //     done: snap.val().doneTasks,
//           //     tasksTotal: Object.values(snap.val()).length - 1,
//           //     loading: false
//           //   });
//         } else {
//           if (!classID.length || snap.val() == null) {
//             console.log(!classID.length || snap.val() == null);
//             // commit("setTasksList", {
//             //   list: [],
//             //   tasksTotal: 0,
//             //   done: 0,
//             //   loading: false
//             // });
//           }
//         }
//       });
//   } catch (e) {
//     console.log(e);
//     // commit("setError", e);
//   }
// };

// export default getTasksList;
