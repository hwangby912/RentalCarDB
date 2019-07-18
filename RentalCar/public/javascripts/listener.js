$(document).ready(() => {
    $('#signupBtn').click(() => {
        const userid = $('#signupID').val(); 
        const userpw = $('#signupPW').val();
        const name = $('#signupName').val();
        const phone = $('#signupPhone').val();
        const email = $('#signupEmail').val();

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
            $.post('/signup', sendParams, (data, status) => {
                const parsedData = JSON.parse(data);
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
            console.log(parsedData.txt[0].id);
            console.log(parsedData.txt[0].password);
            console.log(parsedData.txt[0].name);
            console.log(parsedData.txt[0].phone);
            console.log(parsedData.txt[0].email);
            
        });
    });

    $('#carLocation').mouseover(() => {
        var carLocationCount = 0;
        $.post('/car_location', '', (data, status) => {
            const parsedData = JSON.parse(data);
            parsedData.txt.forEach((element) => {
                if(carLocationCount < parsedData.txt.length) {
                    $('#carLocation').append(`<option value = "${element.location}">${element.location}</option>`);
                    carLocationCount++;
                }
            });
            
        });
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
    });
});