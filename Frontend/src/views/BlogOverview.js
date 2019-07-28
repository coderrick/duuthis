import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import { retrieveFromLink } from "../api";
import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";

console.log("I am here");
retrieveFromLink(
  "https://api.yuuvis.io/dms/objects/c856c4a2-c3c2-49e3-b7f5-0bd5420735c1/contents/renditions/slide"
).then(data => console.log(data));

const BlogOverview = ({ smallStats, discussions }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="PRODUCTIVITY OVERVIEW"
        subtitle="Duuthis"
        className="text-sm-left mb-3"
      />
    </Row>

    <Row>
      <Col lg="8" md="12" sm="12" className="mb-4">
        {discussions.map((discussion, idx) => (
          <div key={idx} className="blog-comments__item d-flex p-3">
            {/* Avatar */}
            <div className="blog-comments__avatar mr-3">
              <img src={discussion.author.image} alt={discussion.author.name} />
            </div>

            {/* Content */}
            <div className="blog-comments__content">
              {/* Content :: Title */}
              <div className="blog-comments__meta text-mutes">
                <a className="text-secondary" href={discussion.author.url}>
                  {discussion.author.name}
                </a>{" "}
                <br />
                <a className="text-secondary" href={discussion.post.url}>
                  {discussion.post.title}
                </a>
              </div>

              {/* Content :: Body */}
              <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>
            </div>
          </div>
        ))}
      </Col>
    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      {/* New Draft */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col>

      {/* Discussions */}
      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
  discussions: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Tickets Completed",
      value: "290",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Tickets Icebox",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Number of Stand-ups held",
      value: "8,147",
      percentage: "3.8%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "New Tickets",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    }
  ],
  discussions: [
    {
      id: 0,
      author: {
        image: require("../images/avatars/0.jpg"),
        name: "Alison"
      },
      post: {
        title: "Frontend Engineer"
      }
    },
    {
      id: 1,
      author: {
        image: require("../images/avatars/1.jpg"),
        name: "Peter"
      },
      post: {
        title: "Frontend Lead"
      }
    },
    {
      id: 2,
      author: {
        name: "Derrick",
        image: require("../images/avatars/2.jpg")
      },
      post: {
        title: "Backend Lead"
      }
    },
    {
      id: 3,
      author: {
        image: require("../images/avatars/3.jpg"),
        name: "Victor"
      },
      post: {
        title: "Fullstack Engineer"
      }
    },
    {
      id: 4,
      author: {
        image: require("../images/avatars/4.jpg"),
        name: "Dennis"
      },
      post: {
        title: "Devops Engineer"
      }
    }
  ]
};

export default BlogOverview;
