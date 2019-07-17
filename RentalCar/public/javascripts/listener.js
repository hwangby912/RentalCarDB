$(document).ready(() => {
    var carLocationCount = 0;
    var carNameCount = 0;

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

    $('#carLocation').mouseover(() => {
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

    $('#registerBtn').click(() => {
        const location = $('#carLocation').val();
        const carName = $('#carName').val();
        const startDay = $('#startDay').val();
        const startTime = $('#startTime').val();
        const endDay = $('#endDay').val();
        const endTime = $('#endTime').val();

        const sendParams = {
            location,
            carName,
            startDay,
            startTime,
            endDay,
            endTime
        }

        // console.log(sendParams);

        $.post('/reservation', sendParams, (data, status) => {
        //     const parsedData = JSON.parse(data);
        //     alert('예약이 완료되었습니다. ');
        //     $('#location').val('')
        //     $('#carName').val('')
        //     $('#startDay').val('')
        //     $('#startTime').val('')
        //     $('#endDay').val('')
        //     $('#endTime').val('')
        });
    });
});