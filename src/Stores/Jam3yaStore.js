import { makeAutoObservable } from "mobx";
import api from "../Api/api";
import userData from "./User";
import moment from "moment";
import { toast } from "react-toastify";

class Jam3yaStore {
  jam3yat = [];
  joined = true;
  seconds = 7000;

  constructor() {
    makeAutoObservable(this, {});
  }

  fetchJam3ya = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yat = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // creat
  createJam3ya = async (jam3yaData) => {
    try {
      const response = await api.post("/jam3ya", jam3yaData);
      this.jam3yat.push(response.data);
      toast.success(`You Created a Jam3ya Succsesfuly`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // join

  joinJam3ya = async (jam3yaid) => {
    const currentJam3ya = this.jam3yat.find(
      (jam3ya) => jam3ya._id === jam3yaid
    );
    const numberofusers = currentJam3ya.users.length + 1;

    const todayDate = Date.now();
    const currentDate = moment(todayDate).format("YYYY/MM/DD");
    const jam3yaStartDate = moment(currentJam3ya.startDate).format(
      "YYYY/MM/DD"
    );

    if (userData.user === null) {
      this.joined = false;
      console.log("No User");
      // alert("you have to sign in first!");
      toast.warn(
        `Sorry You Can't Join!
        you have to sign in first!`,
        {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    // else if (
    //   currentJam3ya.find((element) => element === userData.user) ===
    //   userData.user
    // ) {
    //   //we shoud join only one time
    //   this.joined = false;
    //   console.log("you are already member in this Jam#ya!");
    // }
    else if (
      +numberofusers > +currentJam3ya.limit ||
      currentDate >= jam3yaStartDate
    ) {
      this.joined = false;
      console.log("Cant Join this Jam3ya");
      if (+numberofusers > +currentJam3ya.limit) {
        toast.warn(
          `Sorry this Jam3ya has exceeded the limit!
          you can find another Jam3ya or creat one!`,
          {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else if (currentDate >= jam3yaStartDate) {
        toast.warn("Sorry This Jam3ya has started!!", {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      this.joined = true;
      currentJam3ya.users.push(userData.user);
      console.log("joinded");

      try {
        const response = await api.post(`/jam3ya/join/${jam3yaid}`);
        toast.success(
          `Welcome ${userData.user.username}, you are part of Jam3ya`,
          {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  //delete function
  deleteJam3ya = async (jam3yaId) => {
    const currentJam3ya = this.jam3yat.find(
      (jam3ya) => jam3ya._id === jam3yaId
    );
    const authorOfJam3ya = currentJam3ya.author._id;

    if (userData.user === null) {
      this.joined = false;
      console.log("No User");
      toast.warn(
        `Sorry You Can't Join!
        you have to sign in first!`,
        {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else if (authorOfJam3ya !== userData.user._id) {
      console.log(
        "you can't delete cause you're not the author of this Jam3ya!"
      );
      toast.warn(
        "you can't delete cause you're not the author of this Jam3ya!",
        {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      try {
        await api.delete(`/jam3ya/${jam3yaId}`);
        this.jam3yat = this.jam3yat.filter((jam3ya) => jam3ya._id !== jam3yaId);
        toast.success(`You Succsesfuly deleted the Jam3ya`, {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //leave function
  leaveJam3ya = async (jam3yaId) => {
    const currentJam3ya = this.jam3yat.find(
      (jam3ya) => jam3ya._id === jam3yaId
    );

    if (userData.user === null) {
      this.joined = false;
      toast.warn(
        `Sorry You Can't Join!
        you have to sign in first!`,
        {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else if (currentJam3ya.users.length <= 1) {
      toast.warn(
        `You can't leave this jam3ya cause you're the auther you can delete it!`,
        {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      try {
        await api.post(`/jam3ya/leave/${jam3yaId}`);

        // currentJam3ya.users.push(userData.user);
        currentJam3ya.users = currentJam3ya.users.filter(
          (user) => user._id !== userData.user._id
        );
        toast.success(`You Succsesfuly Leaved the Jam3ya`, {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
