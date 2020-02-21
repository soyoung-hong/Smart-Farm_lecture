module.exports = {
    navBar: function (isHome, weather, userName) {
        let homeLink = isHome ? `<a class="nav-link active" href="#">Home</a>` : `<a class="nav-link" href="/home">Home</a>`;
        return `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src="/smartfac.png" class="d-inline-block align-top" alt="">&nbsp;&nbsp;&nbsp;
                <ul class="nav nav-pills mr-auto">
                    <li class="nav-item">
                        ${homeLink}
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/logout">로그아웃</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> </a>
                    </li>
                </ul>
                <div class="navbar-text">
                    <p>${weather}</p>
                    <p>${userName}님 환영합니다.</p>
                </div>
            </nav>
        `;
    },
    menuLink: function (menu) {
        let sensorLink = `<a class="nav-link" href="/sensor">센서</a>`;
        let actuatorLink = `<a class="nav-link" href="/actuator">액츄에이터</a>`;
        let userLink = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
        let pictureLink = `<a class="nav-link" href="/picture">사진</a>`;
        switch (menu) {
            case 1: // Sensor 메뉴를 눌렀을 경우
                sensorLink = `<a class="nav-link active" href="#">센서</a>`;
                break;
            case 2: // Actuator 메뉴를 눌렀을 경우
                actuatorLink = `<a class="nav-link active" href="#">액츄에이터</a>`;
                break;
            case 3:
                pictureLink = `<a class="nav-link active" href="#">사진</a>`;
                break;
            case 4: // User 메뉴를 눌렀을 경우
                userLink = `<a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
                break;

            default:
                break;
        }
        return `
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    ${sensorLink}
                </li>
                <li class="nav-item">
                    ${actuatorLink}
                </li>
                <li class="nav-item">
                    ${pictureLink}
                </li>
                <li class="nav-item dropdown">
                    ${userLink}
                        사용자
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/user/register">등록(C)</a>
                        <!-- 페이지를 지원하기 위해 /user/list/page/1 으로 변경-->
                        <a class="dropdown-item" href="/user/list/page/1">조회(R)</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </li>
            </ul>
        `;
    },
    weather: function (temp, humid, ico) {
        return `
            <a href='/weather'><button type="button" class="btn btn-secondary btn-sm">날씨</button></a>&nbsp;
            <img src="${ico}" width="32" height="32">&nbsp;
            기온: ${temp}&#8451;, 습도: ${humid}% &nbsp;&nbsp;&nbsp;
        `;
    },
    header: function () {
        return `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>강남 스마트팜</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <script src="/fontawesome/all.min.js"></script>
        <script src="/jquery/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        `;
    }
}