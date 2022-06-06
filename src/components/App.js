

function App() {
  return (
    <div className="page">
      <main className="content">
        <section className="upper">
          <button className="upper__button-add">Добавить</button>
          <ul className="upper__columns columns">
            <li className="upper__column columns__item">
              <p>I</p>
            </li>
            <li className="upper__column columns__item">
              <p>II</p>
            </li>
            <li className="upper__column columns__item">
              <p>III</p>
            </li>
            <li className="upper__column columns__item">
              <p>IV</p>
            </li>
            <li className="upper__column columns__item">
              <p>V</p>
            </li>
            <li className="upper__column columns__item">
              <p>VI</p>
            </li>
          </ul>
        </section>
        <section className="card-items">
          <article className="card">
            <div className="card__grid">
              <img src="<%=require('./images/hh.png')%>" alt="" className="card__icon"/>
              <h2 className="card__title">комточкаком</h2>
              <a rel="stylesheet" href="" className="card__link">Ссылка на вакансию</a>
              <h3 className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eos repellendus inventore quisquam ipsa doloribus asperiores commodi assumenda alias impedit nostrum vel delectus accusamus sed saepe iusto ipsam, culpa officiis.</h3>
              <button className="card__btn-scale"></button>
              <h3 className="card__data">02.03.20</h3>
            </div>
            <ul className="card__columns columns">
              <li className="card__column columns__item"></li>
              <li className="card__column columns__item"></li>
              <li className="card__column columns__item"></li>
              <li className="card__column columns__item"></li>
              <li className="card__column columns__item"></li>
              <li className="card__column columns__item"></li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
