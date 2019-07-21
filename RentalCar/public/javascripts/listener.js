$(document).ready(() => {
    // signupBtn 객체가 눌리면 수행되는 것
    $('#signupBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userid = $('#signupID').val(); 
        const userpw = $('#signupPW').val();
        const name = $('#signupName').val();
        const phone = $('#signupPhone').val();
        const email = $('#signupEmail').val();

        // 하나라도 비어있다면 alert창을 띄움
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else if(name === '') {
            alert('이름를 입력해주세요. ');
        } else if(phone === '') {
            alert('핸드폰 번호를 입력해주세요. ');
        } else if(email === '') {
            alert('Email을 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw,
                name,
                phone,
                email
            };

            // post 방식으로 sendParams를 전송
            $.post('/signup', sendParams, (data, status) => {
                alert('회원 가입이 완료되었습니다. ');
                $('#signupID').val('');
                $('#signupPW').val('');
                $('#signupName').val('');
                $('#signupPhone').val('');
                $('#signupEmail').val('');
            });
        }
    });

    $('#loginBtn').click(() => {
        const userid = $('#loginID').val(); 
        const userpw = $('#loginPW').val();
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw
            }
            $.post('/login', sendParams, (data, status) => {
                try {
                    $('#loginID').val() = '';
                    $('#loginPW').val() = '';
                } catch(err) {
                    window.location.reload(true);
                }
            });
        }
    });

    $('#logoutBtn').click(() => {
        $.get('/logout', '', (data, status) => {
            location.reload(true);
        });
    });

    $('#checkBtn').click(() => {
        const checkPW = $('#checkPW').val();

        const sendParams = {
            checkPW
        }
        $.post('/user_info_check', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            $('#userIDVal').val(parsedData.txt[0].id);
            $('#userPWVal').val(parsedData.txt[0].password);
            $('#userNameVal').val(parsedData.txt[0].name);
            $('#userPhoneVal').val(parsedData.txt[0].phone);
            $('#userEmailVal').val(parsedData.txt[0].email);
        });
    });

    $('#modifyInfo').click(() => {
        const userPW = $('#userPWVal').val();
        const userName = $('#userNameVal').val();
        const userPhone = $('#userPhoneVal').val();
        const userEmail = $('#userEmailVal').val();

        const sendParams = {
            userPW,
            userName,
            userPhone,
            userEmail,
        };

        if(userPW == '') {
            alert('비밀번호를 입력해주시기 바랍니다. ');
        } else if(userName == '') {
            alert('이름을 입력해주시기 바랍니다. ');
        } else if(userPhone == '') {
            alert('핸드폰 번호를 입력해주시기 바랍니다. ');
        } else if(userEmail == '') {
            alert('Email 주소를 입력해주시기 바랍니다. ');
        } else {
            $.post('/modify_info', sendParams, (data, status) => {
                $('#userPWVal').val('');
                $('#userNameVal').val('');
                $('#userPhoneVal').val('');
                $('#userEmailVal').val('');
                alert('회원 정보가 수정되었습니다. ');
            });
        }
    });

    $('#deleteUser').click(() => {
        // const userID = $('#userIDVal').val();
        // alert(userID);
        if(confirm("계정을 정말 삭제하시겠습니까?")) {
            $.post('/delete_user', '', (data, status) => {
                alert('저희 서비스를 이용해주셔서 감사합니다. ');
                $.get('/logout', '', (data, status) => {
                    location.reload(true);
                });
            });
        }
    });

    $('#carLocation').mouseover(() => {
        var carLocationCount = 0;
        $.post('/car_location', '', (data, status) => {
            const parsedData = JSON.parse(data);
            if(carLocationCount == 0) {
                $('#carLocation').html('');
            }
            parsedData.txt.forEach((element) => {
                if(carLocationCount < parsedData.txt.length) {
                    $('#carLocation').append(`<option value = "${element.location}">${element.location}</option>`);
                    carLocationCount++;
                }
            });
            
        });
        carLocationCount = 0;
    });

    $('#carName').mouseover(() => {
        var carNameCount = 0;

        const carLocation = $('#carLocation').val();
        
        const sendParams = {
            carLocation
        };
        
        // alert(sendParams.carLocation);
        // carNameCount = 0;
        // $('#carName').html('');

        $.post('/car_name', sendParams, (data, status) => {
            // alert(data);
            const parsedData = JSON.parse(data);
            if(carNameCount == 0) {
                $('#carName').html('');
            }
            parsedData.txt.forEach((element) => {
                if(carNameCount < parsedData.txt.length) {
                    $('#carName').append(`<option value = "${element.car_name}">${element.car_name}</option>`);
                    carNameCount++;
                }
            });
            
        });
        carNameCount = 0;
    });

    $('#carNum').mouseover(() => {
        const carLocation = $('#carLocation').val();
        const carName = $('#carName').val();
        
        const sendParams = {
            carLocation,
            carName,
        };
        
        // alert(sendParams.carLocation);
        // carNameCount = 0;
        // $('#carName').html('');

        $.post('/car_number', sendParams, (data, status) => {
            // alert(data);
            const parsedData = JSON.parse(data);
            if(carNameCount == 0) {
                $('#carNum').html('');
            }
            parsedData.txt.forEach((element) => {
                if(carNameCount < parsedData.txt.length) {
                    $('#carNum').append(`<option value = "${element.cno}">${element.cno}</option>`);
                    carNameCount++;
                }
            });
            
        });
        carNameCount = 0;
    });

    $('#totalPrice').mouseover(() => {
        let carPriceCount = 0;
        const strDate1 = $('#startDay').val();
        const strDate2 = $('#endDay').val();
        const arr1 = strDate1.split('-');
        const arr2 = strDate2.split('-');
        const dat1 = new Date(arr1[0], arr1[1], arr1[2]);
        const dat2 = new Date(arr2[0], arr2[1], arr2[2]);

        const diff = dat2 - dat1;
        const currDay = 24 * 60 * 60 * 1000;// 시 * 분 * 초 * 밀리세컨
        // const currMonth = currDay * 30;// 월 만듬
        // const currYear = currMonth * 12; // 년 만듬
        const diffDay = parseInt(diff / currDay);
        const carNum = $('#carNum').val();
        let price;
        const sendParams = {
            diffDay,
            carNum,
        }

        $.post('/price_calculate', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            parsedData.txt.forEach((element) => {
                if(carPriceCount < parsedData.txt.length) {
                    price = element.price;
                    carPriceCount++;
                }
            });
            if(isNaN(parseInt(diffDay * parsedData.txt[0].price))) {
                $('#totalPrice').html(
                    "여기를 올리면 가격이 나옵니다."
                );
            } else {
                $('#totalPrice').html(
                    "총 가격은 " +
                    parseInt(diffDay * parsedData.txt[0].price) +
                    " 입니다. "
                );
            }
        });
        

    });

    $('#registerBtn').click(() => {
        const location = $('#carLocation').val();
        const carName = $('#carName').val();
        const carNum = $('#carNum').val();
        const startDay = $('#startDay').val();
        const startTime = $('#startTime').val();
        const endDay = $('#endDay').val();
        const endTime = $('#endTime').val();

        const sendParams = {
            location,
            carName,
            carNum,
            startDay,
            startTime,
            endDay,
            endTime
        }

        if($('#carLocation').val() === '') {
            alert('지역을 선택해주세요.');
        } else if($('#carName').val() === '') {
            alert('차량 이름을 선택해주세요.');
        } else if($('#carNum').val() === '') {
            alert('차량 번호를 선택해주세요.');
        } else if($('#startDay').val() === '') {
            alert('예약 일자를 선택해주세요.');
        } else if($('#endDay').val() === '') {
            alert('반납 일자를 선택해주세요.');
        } else if($('#startTime').val() === '') {
            alert('예약 시간를 선택해주세요.');
        } else if($('#endTime').val() === '') {
            alert('반납 시간를 선택해주세요.');
        } else {
            if(confirm('예약을 하시겠습니까?')) {
                $.post('/reservation', sendParams, (data, status) => {
                    try {
                        $('#location').val('')
                        $('#carName').val('')
                        $('#startDay').val('')
                        $('#startTime').val('')
                        $('#endDay').val('')
                        $('#endTime').val('')
                    } catch(err) {
                        window.location.reload(true);
                    }
                });
            }
        }
    });
});