import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Foundation from 'react-foundation';
import { Progress, Badge, MediaObject, MediaObjectSection, Thumbnail, Callout, Switch, Pagination, PaginationPrevious, Inline, PaginationItem, Breadcrumbs, BreadcrumbItem, PaginationNext, PaginationEllipsis, Link, Button, Colors } from 'react-foundation'


class App extends Component {
  render() {
    return (
      <div className="App">


<div className="button-basics-example">
  <Link>Learn More</Link>
  <Link>View All Features</Link>
  <Button color={Colors.SUCCESS}>Save</Button>
  <Button color={Colors.ALERT}>Delete</Button>
</div>

<div className="button-hollow-example">
  <Button color={Colors.PRIMARY} isHollow>Primary Color</Button>
  <Button color={Colors.SECONDARY} isHollow>Secondary Color</Button>
  <Button color={Colors.SUCCESS} isHollow>Success Color</Button>
  <Button color={Colors.ALERT} isHollow>Alert Color</Button>
  <Button color={Colors.WARNING} isHollow>Warning Color</Button>
</div>


<div className="switch-basics-example">
  <Switch/>
</div>


<div className="pagination-basics-example">
  <Pagination aria-label="Pagination">
    <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
    <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
    <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
    <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
    <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
    <PaginationEllipsis/>
    <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
    <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
    <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
  </Pagination>
</div>


<div className="breadcrumbs-example">
  <nav aria-label="You are here:" role="navigation">
    <Breadcrumbs>
      <BreadcrumbItem><a>Home</a></BreadcrumbItem>
      <BreadcrumbItem><a>Features</a></BreadcrumbItem>
      <BreadcrumbItem isDisabled>Gene Splicing</BreadcrumbItem>
      <BreadcrumbItem>
        <Inline showForSr>Current: </Inline> Cloning
      </BreadcrumbItem>
    </Breadcrumbs>
  </nav>
</div>


<div className="callout-basics-example">
  <Callout>
    <h5>This is a callout.</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a>It's dangerous to go alone, take this.</a>
  </Callout>
</div>


<div className="media-object-basics-example">
  <MediaObject>
    <MediaObjectSection>
      <Thumbnail src="//unsplash.it/100"/>
    </MediaObjectSection>
    <MediaObjectSection isMain>
      <h4>Dreams feel real while we're in them.</h4>
      <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
    </MediaObjectSection>
  </MediaObject>
</div>

<div className="badge-colors-example">
  <Badge color={Colors.SECONDARY}>2</Badge>
  <Badge color={Colors.SUCCESS}>3</Badge>
  <Badge color={Colors.ALERT}>A</Badge>
  <Badge color={Colors.WARNING}>B</Badge>
</div>


<div className="progress-basics-example">
  <Progress tabIndex="0" value={0}/>
  <Progress tabIndex="0" value={50}/>
</div>


      </div>
    );
  }
}

export default App;
