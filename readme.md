-   React uses<- Virtual DOM
-   So, need to make virtual DOM
-   virtual DOM을 이용해서 진짜 돔을 업데이트
-   virtual dom은 html 태그를 변환시키는 구조
-   자바스크립트 친화적인 구조: 객체

```
<div id='root>
    <span>asdf</span>
</div>

{
    tagName: 'div',
    props: {
        id: 'root',
        className: 'container'
    },
    children: [
        {
            tagName: 'span',
            props: {},
            children: [
            'asdf',
            ]
        }
    ]
}
```
