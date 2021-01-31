import {
  bugAdded,
  bugRemoved,
  bugResolved,
  unresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import storeCreator from "./store/storeCreator";

const store = storeCreator();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(projectAdded({ name: "Project 1" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAdded({ description: "Bug 4" }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugResolved({ id: 2 }));

store.dispatch(userAdded({ name: "Zahid Hussain" }));
store.dispatch(userAdded({ name: "Ayesha Zahid" }));

store.dispatch(bugAssignedToUser({ bugId: 2, userId: 2 }));

const unrbugs = unresolvedBugs(store.getState());

const bugsAssignedToUser = getBugsByUser(2)(store.getState());

console.log(store.getState());
console.log(unrbugs);
console.log("Bugs Assigned To User:", bugsAssignedToUser);
unsubscribe();
