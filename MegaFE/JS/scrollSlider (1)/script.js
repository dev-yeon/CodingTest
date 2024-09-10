window.onload = () => {
    /*
    가로 스크롤의 값을 세로스크롤 값에 추가해서 전체 스크롤의 길이를 늘리는 구조
    
    
    */
    let wScrollTop = window.pageYOffset;//현재 창의 스크롤 위치
    const winH = window.innerHeight;//브라우저 창의 높이
    const winW = window.innerWidth;//브라우저 창의 넓이

    const itemClass = 'slider';
    const itemActive = `${itemClass}-active`;
    const itemEnd = `${itemClass}-end`;

    const sliderSection = document.querySelectorAll('.horizontal-scroll');

    sliderSection.forEach((el) => {
        //현재 sliderSection이 가지고 있는 위치값
        //sliderSection이 가지고 있는 가로 컨텐츠의 길이를 받아와야 함
        setScroll(el);//sliderSection가 가지고 있는 가로 스크롤값 세팅
        setActive(el);

    })

    window.addEventListener('scroll', () => {
        wScrollTop = window.pageYOffset;//스크롤 이벤트가 실행되면 pageYOffset값을 새로 받아옴
        sliderSection.forEach((el) => {
            setActive(el);
            activeScorll(el)
        })
    })


    function setActive(el) {
        const contentY = el.getBoundingClientRect();
        //각 요소의 크기와 위치를 받아옴 (현재 화면에 보이는지 체크하기 위함)
        // console.log(contentY)
        el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
            //특정 요소에 있는 클래스를 제거
            itemClassEl.classList.remove(itemActive);
            itemClassEl.classList.remove(itemEnd);
        })

        if (contentY.bottom < 0) {
            console.log('33')
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
                itemClassEl.classList.add(itemEnd)
            })
        } else {
            console.log('sdgdsg')
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
                if (contentY.top <= 0) {
                    itemClassEl.classList.add(itemActive);
                } else if (contentY.bottom <= winH) {
                    itemClassEl.classList.add(itemEnd)
                }
            })
        }

    }

    function setScroll(el) {
        const sectionClass = el.classList[0];//요소의 첫번째 클래스를 가져온다.
        const contentWrapper = el.querySelector(`.${sectionClass}-item`);

        const contentWrapperScrollW = contentWrapper.scrollWidth;
        //contentWrapper안에 있는 전체 콘텐츠의 가로 길이를 가져옴(보이지 않는 컨텐츠)

        el.contentWrapper = contentWrapper;
        el.contentWrapperScrollW = contentWrapperScrollW

        el.rightMax = -(contentWrapperScrollW - winW)
        el.style.height = `${el.contentWrapperScrollW}px`;
        el.innerHeight = el.offsetHeight;
        //요소의 높이에 offsetHeight 값을 대입해서 컨텐츠 전체 높이를 저장
        //컨텐츠를 완전하게 스크롤하기 위해서 필요한 최대 왼쪽값을 반환
        el.init = true //초기화 여부 boolean값으로 반환
        el.transformX = '0'//초기 위치값 설정
        el.classList.add(`${sectionClass}-init`)
    }


    function activeScorll(el) {
        const scrollP = wScrollTop - el.offsetTop;
        //scrollP는 scroll이벤트가 발생하면 새로 받아오는 wScrollTopr값에 el가 가지고 있는 offsetTop만큼
        //빼서 스크롤위치를 계산
        const scrollCenter = scrollP / (el.innerHeight - (winH - winW))
        //해당 컨텐츠가 세로로 스크롤된 비율을 반환하는 값
        const transformP = scrollCenter * el.contentWrapperScrollW;
        // console.log(transformP)
        //세로 스크롤 위치에 따라 콘텐츠가 가로로 얼마나 이동해야 하는지 계산해주는 값
        let toTransform = -(transformP)

        toTransform = Math.min(0, toTransform);
        //0보다 크면 0이 반환 0이하면 toTransform값이 반환
        //처음 위치보다 더 왼쪽으로 가지 못하도록 제한
        toTransform = Math.max(toTransform, el.rightMax)
        //totransform의 값이 0보다 작은지
        //totransform의 값이 현재 움직이는 totransform이 el.righrMax보다 큰지를 판단
        //0보다 작거나 el.righrMax보다 크면 영역을 벗어나지 못하도록 제어

        el.transformX = toTransform;
        el.contentWrapper.style.transform = `translateX(${el.transformX}px)`
    }

}