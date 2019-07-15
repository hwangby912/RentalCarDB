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
    

    $('#logOutBtn').click(() => {
        $.get('/logout', (data, status) => {
            location.reload(true);
        });
    });
});