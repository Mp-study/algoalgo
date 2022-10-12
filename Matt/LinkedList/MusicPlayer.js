const MusicList = require("./MusicList");
const LinkedList = require("./LinkedList");

class MusicPlayer {
  constructor() {
    const linkedList = new LinkedList();
    MusicList.forEach((music) => linkedList.add(music));

    this.playList = linkedList;
    this.currentMusic = linkedList.head;
  }

  getCurrentMusic() {
    console.log("현재 곡: ", this.currentMusic.element.name);
    console.log("아티스트: ", this.currentMusic.element.artist);
  }

  playNextMusic() {
    if (this.currentMusic.next) {
      this.currentMusic = this.currentMusic.next;

      console.log("현재 곡: ", this.currentMusic.element.name);
      console.log("아티스트: ", this.currentMusic.element.artist);
    } else {
      console.log("더 이상 재생할 곡이 없습니다.");
    }
  }

  resetPlayList() {
    this.currentMusic = this.playList.head;
  }
}

module.exports = MusicPlayer;
