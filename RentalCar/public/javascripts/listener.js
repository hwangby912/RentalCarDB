$(document).ready(() => {
  // id가 signupBtn인 객체가 눌리면 수행되는 것
  $("#signupBtn").click(() => {
    // 해당 값들을 변수에 저장함.
    const userid = $("#signupID").val();
    const userpw = $("#signupPW").val();
    const name = $("#signupName").val();
    const phone = $("#signupPhone").val();
    const email = $("#signupEmail").val();

    // 하나라도 비어있다면 alert창을 띄움
    if (userid === "") {
      alert("ID를 입력해주세요.");
    } else if (userpw === "") {
      alert("비밀번호를 입력해주세요. ");
    } else if (name === "") {
      alert("이름를 입력해주세요. ");
    } else if (phone === "") {
      alert("핸드폰 번호를 입력해주세요. ");
    } else if (email === "") {
      alert("Email을 입력해주세요. ");
    } else {
      sendParams = {
        userid,
        userpw,
        name,
        phone,
        email
      };

      // post 방식으로 sendParams를 전송
      $.post("/signup", sendParams, (data, status) => {
        alert("회원 가입이 완료되었습니다. ");
        // 해당 id에 있는 값들 초기화
        $("#signupID").val("");
        $("#signupPW").val("");
        $("#signupName").val("");
        $("#signupPhone").val("");
        $("#signupEmail").val("");
      });
    }
  });

  // id가 loginBtn인 객체가 눌리면 수행되는 것
  $("#loginBtn").click(() => {
    // 해당 값들을 변수에 저장함.
    const userid = $("#loginID").val();
    const userpw = $("#loginPW").val();
    // 하나라도 비어있다면 alert창을 띄움
    if (userid === "") {
      alert("ID를 입력해주세요.");
    } else if (userpw === "") {
      alert("비밀번호를 입력해주세요. ");
    } else {
      sendParams = {
        userid,
        userpw
      };
      // post 방식으로 sendParams를 전송
      $.post("/login", sendParams, (data, status) => {
        try {
          // 해당 id에 있는 값들 초기화
          $("#loginID").val() = "";
          $("#loginPW").val() = "";
        } catch (err) {
          window.location.reload(true);
        }
      });
    }
  });

  // id가 logoutBtn인 객체가 눌리면 수행되는 것
  $("#logoutBtn").click(() => {
    // get방식으로 수행 후 reload 수행
    $.get("/logout", "", (data, status) => {
      location.reload(true);
    });
  });

  // id가 carLocation 객체 위에 있으면 수행되는 것
  $("#carLocation").mouseover(() => {
    var carLocationCount = 0;
    // post 방식으로 car_location.js file로 전송
    $.post("/car_location", "", (data, status) => {
      const parsedData = JSON.parse(data);
      // 처음에는 아무것도 출력을 안함
      if (carLocationCount == 0) {
        $("#carLocation").html("");
      }
      // 지역의 개수만큼 for문을 수행
      parsedData.txt.forEach(element => {
        // DB안에 있는 지역을 option의 인자로 넣어주어 보여줌
        if (carLocationCount < parsedData.txt.length) {
          $("#carLocation").append(
            `<option value = "${element.location}">${element.location}</option>`
          );
          carLocationCount++;
        }
      });
      // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
    });
    carLocationCount = 0;
  });

  // id가 carName 객체 위에 있으면 수행되는 것
  $("#carName").mouseover(() => {
    var carNameCount = 0;

    // 해당 값들을 변수에 저장함.
    const carLocation = $("#carLocation").val();

    const sendParams = {
      carLocation
    };
    // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
    $.post("/car_name", sendParams, (data, status) => {
      const parsedData = JSON.parse(data);
      // 처음에는 아무것도 출력을 안함
      if (carNameCount == 0) {
        $("#carName").html("");
      }
      // 지역에 대한 차량 개수만큼 for문을 수행
      parsedData.txt.forEach(element => {
        // DB안에 있는 차량 개수를 option의 인자로 넣어주어 보여줌
        if (carNameCount < parsedData.txt.length) {
          $("#carName").append(
            `<option value = "${element.car_name}">${element.car_name}</option>`
          );
          carNameCount++;
        }
      });
      // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
    });
    carNameCount = 0;
  });

  // id가 carNum 객체 위에 있으면 수행되는 것
  $("#carNum").mouseover(() => {
    // 해당 값들을 변수에 저장함.
    const carLocation = $("#carLocation").val();
    const carName = $("#carName").val();

    const sendParams = {
      carLocation,
      carName
    };
    // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
    $.post("/car_number", sendParams, (data, status) => {
      const parsedData = JSON.parse(data);
      // 처음에는 아무것도 출력을 안함
      if (carNameCount == 0) {
        $("#carNum").html("");
      }
      // 지역에 대한 차량 개수만큼 for문을 수행
      parsedData.txt.forEach(element => {
        // DB안에 있는 차량에 대한 차량번호 개수를 option의 인자로 넣어주어 보여줌
        if (carNameCount < parsedData.txt.length) {
          $("#carNum").append(
            `<option value = "${element.cno}">${element.cno}</option>`
          );
          carNameCount++;
        }
      });
      // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
    });
    carNameCount = 0;
  });

  // id가 totalPrice 객체 위에 있으면 수행되는 것
  $("#totalPrice").mouseover(() => {
    // 값 초기화
    let carPriceCount = 0;
    // 해당 값들을 변수에 저장함.
    const strDate1 = $("#startDay").val();
    const strDate2 = $("#endDay").val();
    // Date 객체에 대해서 -를 기준으로 값을 잘라내어 값을 저장
    const arr1 = strDate1.split("-");
    const arr2 = strDate2.split("-");
    // Date 객체 생성 Date의 일자의 차이를 연산하기 위함
    const dat1 = new Date(arr1[0], arr1[1], arr1[2]);
    const dat2 = new Date(arr2[0], arr2[1], arr2[2]);

    const diff = dat2 - dat1; // 날짜 차이를 연산
    const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
    const diffDay = parseInt(diff / currDay); // 날짜 차이를 int형으로 변환
    const carNum = $("#carNum").val();
    let price;
    const sendParams = {
      diffDay,
      carNum
    };
    // post 방식으로 price_calculate.js file로 전송하며 sendParams를 인자로 전송
    $.post("/price_calculate", sendParams, (data, status) => {
      const parsedData = JSON.parse(data);
      // 차량 가격에 개수만큼 for문 수행
      parsedData.txt.forEach(element => {
        if (carPriceCount < parsedData.txt.length) {
          price = element.price;
          carPriceCount++;
        }
      });
      // Date 객체를 연산할때, 날짜 차이를 int형으로 만들기 위함
      if (isNaN(parseInt(diffDay * parsedData.txt[0].price))) {
        $("#totalPrice").html("여기를 올리면 가격이 나옵니다.");
        // 가격을 나타내는 공간
      } else {
        $("#totalPrice").html(
          "총 가격은 " +
            parseInt(diffDay * parsedData.txt[0].price) +
            " 입니다. "
        );
      }
    });
  });

  // id가 registerBtn인 객체가 눌리면 수행되는 것
  $("#registerBtn").click(() => {
    // 해당 값들을 변수에 저장함.
    const location = $("#carLocation").val();
    const carName = $("#carName").val();
    const carNum = $("#carNum").val();
    const startDay = $("#startDay").val();
    const startTime = $("#startTime").val();
    const endDay = $("#endDay").val();
    const endTime = $("#endTime").val();

    const sendParams = {
      location,
      carName,
      carNum,
      startDay,
      startTime,
      endDay,
      endTime
    };
    // 하나라도 비어있다면 alert창을 띄움
    if ($("#carLocation").val() === "") {
      alert("지역을 선택해주세요.");
    } else if ($("#carName").val() === "") {
      alert("차량 이름을 선택해주세요.");
    } else if ($("#carNum").val() === "") {
      alert("차량 번호를 선택해주세요.");
    } else if ($("#startDay").val() === "") {
      alert("예약 일자를 선택해주세요.");
    } else if ($("#endDay").val() === "") {
      alert("반납 일자를 선택해주세요.");
    } else if ($("#startTime").val() === "") {
      alert("예약 시간를 선택해주세요.");
    } else if ($("#endTime").val() === "") {
      alert("반납 시간를 선택해주세요.");
    } else {
      // 예약을 할 것인지 확인하는 곳
      if (confirm("예약을 하시겠습니까?")) {
        // 확인 버튼을 누르면 수행됨
        // post 방식으로 reservation.js file로 전송하며 sendParams를 인자로 전송
        $.post("/reservation", sendParams, (data, status) => {
          try {
            // 해당 id에 있는 값들 초기화
            $("#location").val("");
            $("#carName").val("");
            $("#startDay").val("");
            $("#startTime").val("");
            $("#endDay").val("");
            $("#endTime").val("");
          } catch (err) {
            window.location.reload(true);
          }
        });
      }
    }
  });

  // id가 checjBtn인 객체가 눌리면 수행되는 것
  $("#checkBtn").click(() => {
    // 해당 값들을 변수에 저장함.
    const checkPW = $("#checkPW").val();

    const sendParams = {
      checkPW
    };
    // post 방식으로 user_info_check.js file로 전송하며 sendParams를 인자로 전송
    $.post("/user_info_check", sendParams, (data, status) => {
      const parsedData = JSON.parse(data);
      // 해당 id의 객체에 인자값들을 채움
      $("#userIDVal").val(parsedData.txt[0].id);
      $("#userPWVal").val(parsedData.txt[0].password);
      $("#userNameVal").val(parsedData.txt[0].name);
      $("#userPhoneVal").val(parsedData.txt[0].phone);
      $("#userEmailVal").val(parsedData.txt[0].email);
    });
  });

  // id가 modifyInfo인 객체가 눌리면 수행되는 것
  $("#modifyInfo").click(() => {
    // 해당 값들을 변수에 저장함.
    const userPW = $("#userPWVal").val();
    const userName = $("#userNameVal").val();
    const userPhone = $("#userPhoneVal").val();
    const userEmail = $("#userEmailVal").val();

    const sendParams = {
      userPW,
      userName,
      userPhone,
      userEmail
    };
    // 하나라도 비어있다면 alert창을 띄움
    if (userPW == "") {
      alert("비밀번호를 입력해주시기 바랍니다. ");
    } else if (userName == "") {
      alert("이름을 입력해주시기 바랍니다. ");
    } else if (userPhone == "") {
      alert("핸드폰 번호를 입력해주시기 바랍니다. ");
    } else if (userEmail == "") {
      alert("Email 주소를 입력해주시기 바랍니다. ");
    } else {
      // post 방식으로 modify_info.js file로 전송하며 sendParams를 인자로 전송
      $.post("/modify_info", sendParams, (data, status) => {
        // 해당 id에 있는 값들 초기화
        $("#userPWVal").val("");
        $("#userNameVal").val("");
        $("#userPhoneVal").val("");
        $("#userEmailVal").val("");
        alert("회원 정보가 수정되었습니다. ");
      });
    }
  });

  // id가 deleteUser인 객체가 눌리면 수행되는 것
  $("#deleteUser").click(() => {
    // 중요 정보이기에 '정말 삭제하는지' 물어봄
    if (confirm("계정을 정말 삭제하시겠습니까?")) {
      // 확인 버튼을 누르면 수행함
      // post 방식으로 delete_user.js file로 전송함
      $.post("/delete_user", "", (data, status) => {
        alert("저희 서비스를 이용해주셔서 감사합니다. ");
        $.get("/logout", "", (data, status) => {
          location.reload(true);
        });
      });
    }
  });
});
