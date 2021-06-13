const hooks = [];
let currentComponent = -1;

export class Component {}

export function useState(initValue) {
	// 캡쳐링
	const position = currentComponent;

	if (!hooks[position]) {
		// 최초 호출이 아니면
		hooks[position] = nextValue;
	}

	// using closure!
	return [
		hooks[position],
		// update할 디스패치 함수
		(nextValue) => {
			hooks[position] = nextValue;
		},
	];
}

// vdom을 진짜 돔으로
function renderRealDOM(vdom) {
	if (typeof vdom === 'string') {
		return document.createTextNode(vdom);
	}

	if (vdom === undefined) return;

	const $el = document.createElement(vdom.tagName);

	vdom.children.map(renderRealDOM).forEach((node) => {
		$el.appendChild(node);
	});

	return $el;
}

// 현재와 이전 비교
// closure를 이용하기 위해/ render를 상수로 만들고, 즉시호출.
export const render = (function () {
	// 요기 클로져 쓸수 있는 공간이 생긴다.
	let prevVdom = null;

	return function (nextVdom, container) {
		if (prevVdom === null) {
			prevVdom = nextVdom;
		}
		// (prevVdom!==null) 이면
		// diff

		container.appendChild(renderRealDOM(nextVdom));
	};
})();

// virtaul DOM 만듬
export function createElement(tagName, props, ...children) {
	if (typeof tagName === 'function') {
		if (tagName.prototype instanceof Component) {
			// 클래스이면..
			// 인스턴스 생성
			const instance = new tagName({ ...props, children });
			return instance.render();
		} else {
			// 일반 함수이면..
			currentComponent++;
			return tagName.apply(null, [props, ...children]);
		}
	}

	// js: 클래스/함수 구분 방법이 없다. => 상속을 받는 지 확인!
	return { tagName, props, children };
}
