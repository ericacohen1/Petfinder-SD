import React, {Component} from "react";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./SuccessStories.css";
import { List } from "../../components/List";
import Article from "../Article";

class SuccessStories extends Component {
    state = {
        articles: []
    };

    getArticles = () => {
        API.getArticles({
          q: "pet adoption",
          start_year: "2017",
          end_year: "2018"
        })
          .then(res =>
            this.setState({
              articles: res.data,
              message: !res.data.length
                ? "No New Articles Found, Try a Different Query"
                : ""
            })
          )
          .catch(err => console.log(err));
      };

    componentDidMount() {
        this.getArticles();
    }
    // getArticles(); // or would the render do a findall

    render() {
        console.log(API);
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Panel title="Results">
                            {this.state.articles.length ? (
                                <List>
                                    {this.state.articles.map(article => (
                                        <Article
                                            key={article._id}
                                            _id={article._id}
                                            title={article.headline.main}
                                            url={article.web_url}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-center">Loading...</h2>
                            )}
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default SuccessStories;