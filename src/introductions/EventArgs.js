export default function EventArgs(){
    const current = (e, type) => {
      const d = new Date();

      switch (type) {
        case 'date':
          console.log(d.toLocaleDateString())
          break;
        case 'time':
          console.log(d.toLocaleTimeString())
          break;
        default:
          console.log(d.toLocaleString())
          break;
      }
    }

    return (
        <div>
          <button id="dt" onClick={e => current(e, 'datetime')}>現在日時</button>
          <button id="dt" onClick={e => current(e, 'date')}>現在日付</button>
          <button id="dt" onClick={e => current(e, 'time')}>現在時刻</button>
        </div>
    )
}
