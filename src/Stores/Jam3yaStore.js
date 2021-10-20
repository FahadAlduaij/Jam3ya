import { makeAutoObservable } from "mobx";
import api from "../Api/api";
import userData from "./User";
import moment from "moment";
import { toast } from "react-toastify";

class Jam3yaStore {
  jam3yat = [];
  joined = true;

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
  createJam3ya = async (jam3yaData) => {
    try {
      const response = await api.post("/jam3ya", jam3yaData);
      this.jam3yat.push(response.data);
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
      alert("you have to sign in first!");
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
        alert(
          " sorry this Jam3ya has exceeded the limit! you can find another Jam3ya or creat one😃"
        );
      } else if (currentDate >= jam3yaStartDate) {
        toast("sorry this Jam3ya has started☹️");
        // alert("sorry this Jam3ya has started☹️");
      }
    } else {
      this.joined = true;
      currentJam3ya.users.push(userData.user);
      console.log("joinded");

      try {
        const response = await api.post(`/jam3ya/join/${jam3yaid}`);
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
      alert("you have to sign in first!");
    } else if (authorOfJam3ya !== userData.user._id) {
      console.log(
        "you can't delete cause you're not the author of this Jam3ya!"
      );
      // alert("you can't delete cause you're not the author of this Jam3ya!");
      toast.warn(
        "you can't delete cause you're not the author of this Jam3ya!",
        {
          position: "top-center",
          autoClose: 3000,
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
      console.log("No User");
    } else if (currentJam3ya.users.length <= 1) {
      console.log(
        "you cant leve this jam3ya cause you're the auther you can delete it!"
      );
    } else {
      try {
        await api.post(`/jam3ya/leave/${jam3yaId}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
}

const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
