import React from "react";
import NewsList from "./dbBusiness.json";
import Axios from "axios";

class NewsBusiness extends React.Component {
  constructor() {
    super();

    this.state = {
      newsList: NewsList
    };
  }
  render() {
    const MyNewList = this.state.newsList.map((lists, index) => {
      return (
        <div
          className="col-md-3 col-sm-12"
          key={lists.source.id}
          style={{
            width: "18rem",
            zIndex: "1",
            margin: "5px",
            marginTop: "70px",
            border: "1px dashed  #007bff",
            borderRadius: "10px"
          }}
        >
          <img
            src={lists.urlToImage}
            className="card-img-top img-fluid"
            style={{ height: "30%" }}
            alt="..."
          />
          <div className="card-body" style={{ height: "20%" }}>
            <h5 className="card-title">{lists.title}</h5>
          </div>
          <ul className="list-group list-group-flush" style={{ height: "40%" }}>
            <li
              className="list-group-item text-right"
              style={{ height: "30%" }}
            >
              المصدر: {lists.author}
            </li>
            <li
              className="list-group-item text-right"
              style={{ height: "30%" }}
            >
              التاريخ:{lists.publishedAt}
            </li>
            <li
              className="list-group-item text-right"
              style={{ height: "40%", overflow: "scroll" }}
            >
              الوصف:{lists.description}
            </li>
          </ul>
          <div className="card-body" style={{ height: "10%" }}>
            <a href={lists.url} className="card-link">
              Open article
            </a>
            <a
              href="javascript:void(0);"
              onClick={() => {
                const ob = this.state.newsList[index];
                alert(ob.title + " added to favourites")
                Axios.get(`http://localhost:5000/updateFav/${ob}`);
              }}
              className="card-link"
            >
              <i className="far fa-heart"></i>Add Favorite
            </a>
          </div>
        </div>
      );
    });
    return <div className="row rowView">{MyNewList}</div>;
  }
}

export default NewsBusiness;
