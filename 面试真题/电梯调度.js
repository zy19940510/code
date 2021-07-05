class Floor {
  constructor() {
    this.queue = [];
    this.goingup = true;
    this.running = false;
    this.timer = null;
    // 每秒钟执行一次
    timer = setInterval(run, 1000);
  }

  // 按下按钮，添加任务
  dial(floor) {
    // 避免重复添加
    if (queue.indexOf(floor) < 0) {
      queue.push(floor);
      // 确保前进方向上楼层都是以楼层数为序的
      queue.sort();
      if (!running) {
        checkStatus();
      }
    }
  }

  // 更新电梯状态，向上和向下
  checkStatus() {
    // 记录当前电梯的运行状态，queue非空，电梯就要动起来
    running = queue.length > 0 ? true : false;

    if (currentFloor == MIN_FLOOR) {
      // 上行
      goingup = true;
    } else if (currentFloor == MAX_FLOOR) {
      // 下行
      goingup = false;
    } else {
      // 在中间，计算是否还有要走的
      goingup && (!running || currentFloor < getMaxInQueue(queue))
        ? (goingup = true)
        : (goingup = false);
      !goingup && (!running || currentFloor > getMinInQueue(queue))
        ? (goingup = false)
        : (goingup = true);
    }
  }

  // 主函数
  run() {
    if (running) {
      // 检查当前楼层是否被按，按了就ding
      if (queue.indexOf(currentFloor) > -1) {
        ding(currentFloor);
      } else {
        goingup ? moveUp() : moveDown();
        updateFloorInfo();
      }
      checkStatus();
    }
  }

  ding(floor) {
    if (timer) {
      // 暂停计时器
      clearInterval(timer);
      // 灭灯
      lightsOut(floor);
      // 将该楼层从数组中移除
      removeFromQueue(queue, floor);
      // 开门
      openDoor();
      setTimeout(function () {
        // 过一会关门
        closeDoor();
        setTimeout(function () {
          // 重新开启计时器
          timer = setInterval(run, 1000);
        }, 3000);
      }, 4000);
    }
  }

  moveUp() {
    if (currentFloor < MAX_FLOOR) {
      currentFloor++;
    }
  }

  moveDown() {
    if (currentFloor > MIN_FLOOR) {
      currentFloor--;
    }
  }
}
