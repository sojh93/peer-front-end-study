export default function Header() {
    let name;
    if(true){
        name = '정현'
    }

    return (
        <div>
            <p>{name}</p>

            <ul>
                <li>왓챠란?</li>
                <li>결제</li>
                <li>이용가이드</li>
                <li>FAQ</li>
            </ul>
        </div>
    )
}