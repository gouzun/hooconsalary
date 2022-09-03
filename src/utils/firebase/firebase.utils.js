import { data } from 'autoprefixer';
import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

import { signInWithEmailAndPassword, getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    //crwn clothing
    // apiKey: "AIzaSyAuUFI1b3y5q8s9kJZ3wVBF_fY_kYsyf2A",
    // authDomain: "crwn-clothing-db-db2b2.firebaseapp.com",
    // projectId: "crwn-clothing-db-db2b2",
    // storageBucket: "crwn-clothing-db-db2b2.appspot.com",
    // messagingSenderId: "872066024801",
    // appId: "1:872066024801:web:8c9b5ea62055b51b84b120"

    //appsalary config
    apiKey: "AIzaSyDpallejyvMVyNZR3v1rH7Sm2LqccoATvM",
    authDomain: "appgsalary.firebaseapp.com",
    projectId: "appgsalary",
    storageBucket: "appgsalary.appspot.com",
    messagingSenderId: "686700189105",
    appId: "1:686700189105:web:57678e3c1527e302b5d990"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();



googleProvider.setCustomParameters({
    prompt: "select_account"
});

function getCurrentDateTime() {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime;
}

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createAt, ...additionalInformation })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


// my js db codes

// Initialize Firebase
// export function initializeDb() {
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);
//     return db;
//   }

export const generateProjectList = async () => {

    const dbPL = db;

    //get records for projectlist and generate select option
    const dbProjectList = collection(dbPL, 'ProjectList');
    const dbProjectDocs = await getDocs(dbProjectList);
    let result = [];
    let rowcount = 1;

    const projectRecords = dbProjectDocs.docs.map((doc) => {
        
        let record = {
            rowcount: rowcount,
            projectname: doc.get('ProjectName'),
            location: doc.get('Location'),
            mainconname: doc.get('MainConName'),
            
        } 
        rowcount++;       
        return result.push(record);
        
    });

    return result;
}

export const generateWorkerList = async () => {

    const dbPL = db;

    //get records for projectlist and generate select option
    const dbList = collection(dbPL, 'WorkerList');
    const dbDocs = await getDocs(dbList);
    let result = [];
    let rowcount = 1;

    const projectRecords = dbDocs.docs.map((doc) => {
        
        let record = {
            rowcount: rowcount,
            Name: doc.get('Name'),
            Project: doc.get('Project'),
            WorkScope: doc.get('WorkScope'),
            
        } 
        rowcount++;       
        return result.push(record);
        
    });

    return result;
}


export const generateSalarySheet = async (projectV, mthV, yearV) => {
    const dbSL = db
    //get records for salarylist
    const dbSalaryList = collection(dbSL, 'SalaryList');
    const dbSalaryDocs = await getDocs(dbSalaryList);

    //retrive data from firebase and generate into html markup

    let rowcount = 1;

    let result = [];

    dbSalaryDocs.docs.filter((doc) => {
        let record = [];
        if (projectV === doc.get('Project') && (mthV === doc.get('SalaryMth')) && (yearV === doc.get('SalaryYear'))) {

            let totalhr = 0;
            let amt = 0;

            totalhr = doc.get('D1') + doc.get('D2') + doc.get('D3') + doc.get('D4') + doc.get('D5') +
                doc.get('D6') + doc.get('D7') + doc.get('D8') + doc.get('D9') + doc.get('D10') +
                doc.get('D11') + doc.get('D12') + doc.get('D13') + doc.get('D14') + doc.get('D15') +
                doc.get('D16') + doc.get('D17') + doc.get('D18') + doc.get('D19') + doc.get('D20') +
                doc.get('D21') + doc.get('D22') + doc.get('D23') + doc.get('D24') + doc.get('D25') +
                doc.get('D26') + doc.get('D27') + doc.get('D28') + doc.get('D29') + doc.get('D30') +
                doc.get('D31')
            amt = Math.floor(totalhr / 8 * doc.get('DayRate'))

            // totalAmt = totalAmt + amt;

            record = {
                rowcount: rowcount,
                workername: doc.get('WorkerName'),
                rate: doc.get('DayRate'),
                // salarymth: doc.get('SalaryMth'),
                // salaryyear: doc.get('SalaryYear'),
                totalhr: totalhr,
                amt: amt,
                // totalAmt: totalAmt.toLocaleString("en-US", {
                //     minimumFractionDigits: 2
                // })
            }
            rowcount++;
            return result.push(record);
        }

    });

    return result;
}

//generateWorkerSheet
export const generateWorkerSheet = async (workerV, projectV, mthV, yearV) => {

    const dbPL = db
    //get records for projectlist and generate select option
    const dbList = collection(dbPL, 'SalaryList');
    const dbDocs = await getDocs(dbList);
    let data = [];
    const fbkey = workerV + '-' + projectV + '-' + mthV + '-' + yearV

    const docRef = doc(dbPL, 'SalaryList', fbkey);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        data.push(
            docSnap.get('D1'),
            docSnap.get('D2'),
            docSnap.get('D3'),
            docSnap.get('D4'),
            docSnap.get('D5'),
            docSnap.get('D6'),
            docSnap.get('D7'),
            docSnap.get('D8'),
            docSnap.get('D9'),
            docSnap.get('D10'),
            docSnap.get('D11'),
            docSnap.get('D12'),
            docSnap.get('D13'),
            docSnap.get('D14'),
            docSnap.get('D15'),
            docSnap.get('D16'),
            docSnap.get('D17'),
            docSnap.get('D18'),
            docSnap.get('D19'),
            docSnap.get('D20'),
            docSnap.get('D21'),
            docSnap.get('D22'),
            docSnap.get('D23'),
            docSnap.get('D24'),
            docSnap.get('D25'),
            docSnap.get('D26'),
            docSnap.get('D27'),
            docSnap.get('D28'),
            docSnap.get('D29'),
            docSnap.get('D30'),
            docSnap.get('D31'), docSnap.get('DayRate'))
    };
    return data;
}

//add New Salary Sheet
export async function addNewFBSalary(selectAddWorker, selectAddProject, addRate, selectSalaryMth, selectSalaryYear, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31) {

    const dbPL = db
    //get records for projectlist and generate select option
    // const dbProjectList = collection(dbPL, 'SalaryList');

    try {

        let tempDate = selectSalaryYear + '-' + selectSalaryMth + '-31'

        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            d31 = 0;
        }

        tempDate = selectSalaryYear + '-' + selectSalaryMth + '-30'

        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            d30 = 0;
        }

        tempDate = selectSalaryYear + '-' + selectSalaryMth + '-29'
        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            d29 = 0;
        }

        //create new doc with custom id;
        const docRef = doc(dbPL, "SalaryList", `${selectAddWorker}-${selectAddProject}-${selectSalaryMth}-${selectSalaryYear}`);

        const newData = {
            WorkerName: selectAddWorker,
            Project: selectAddProject,
            DayRate: parseInt(addRate),
            SalaryMth: selectSalaryMth,
            SalaryYear: selectSalaryYear,
            D1: parseInt(d1),
            D2: parseInt(d2),
            D3: parseInt(d3),
            D4: parseInt(d4),
            D5: parseInt(d5),
            D6: parseInt(d6),
            D7: parseInt(d7),
            D8: parseInt(d8),
            D9: parseInt(d9),
            D10: parseInt(d10),
            D11: parseInt(d11),
            D12: parseInt(d12),
            D13: parseInt(d13),
            D14: parseInt(d14),
            D15: parseInt(d15),
            D16: parseInt(d16),
            D17: parseInt(d17),
            D18: parseInt(d18),
            D19: parseInt(d19),
            D20: parseInt(d20),
            D21: parseInt(d21),
            D22: parseInt(d22),
            D23: parseInt(d23),
            D24: parseInt(d24),
            D25: parseInt(d25),
            D26: parseInt(d26),
            D27: parseInt(d27),
            D28: parseInt(d28),
            D29: parseInt(d29),
            D30: parseInt(d30),
            D31: parseInt(d31),
            creator: localStorage.getItem('status'),
            createdDate: getCurrentDateTime(),
            lastModifiedDate: getCurrentDateTime()
        }
        // await addDoc(dbProjectList, newData)
        await setDoc(docRef, newData);

    } catch (error) {
        console.log(`Error : ${error.code}, ${error.message}`);
    };
}


export async function addNewFBProject(name, location, maincon) {
    const dbPL = db;     
  
    try {
  
      //create new doc with custom id;
      const docRef = doc(dbPL, "ProjectList", `${name}-${location}-${maincon}`);
  
      const newData = {
        Location: location,
        MainConName: maincon,
        ProjectName: name,
        creator: localStorage.getItem('status'),
        createdDate: getCurrentDateTime(),
        lastModifiedDate: getCurrentDateTime()
      }
      
      await setDoc(docRef, newData);
  
    } catch (error) {
      console.log(`Error :${error.code},${error.message}`);
    };
  }
  
  export async function addNewFBWorker(name, project, workscope) {
    const dbPL = db     
  
    try {
  
      //create new doc with custom id;
      const docRef = doc(dbPL, "WorkerList", `${name.toUpperCase()}-${project.toUpperCase()}-${workscope.toUpperCase()}`);
  
      const newData = {
        Name: name.toUpperCase(),
        Project: project.toUpperCase(),
        WorkScope: workscope.toUpperCase(),
        creator: localStorage.getItem('status'),
        createdDate: getCurrentDateTime(),
        lastModifiedDate: getCurrentDateTime()
      }
      // await addDoc(dbProjectList, newData)
      await setDoc(docRef, newData);
  
    } catch (error) {
      console.log(`Error :${error.code},${error.message}`);
    };
  }

  export async function generateWorkerGrid() {
    const dbPL = db
    //get records for projectlist and generate select option
    const dbList = collection(dbPL, 'WorkerList');
    const dbDocs = await getDocs(dbList);
  
    let addViewWorkerMarkup = ``;
    let addSalaryMarkup = ``;
    let rowcount = 1;
  
    const workerRecords = dbDocs.docs.map((doc)=>{
  
      addViewWorkerMarkup = addViewWorkerMarkup + `<tr><th scope="row">${rowcount}</th>
        <td>${doc.get('Name')}</td>
        <td>${doc.get('Project')}</td>
        <td>${doc.get('WorkScope')}</td></tr>`;
  
      addSalaryMarkup = addSalaryMarkup + `<option value="${doc.get('Name')}">${doc.get('Name')}</option>`;
  
      rowcount++;
    });
  
    return { addViewWorkerMarkup, addSalaryMarkup, rowcount };
  }