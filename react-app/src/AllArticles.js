import React, { Component } from 'react';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link, renderMatches } from 'react-router-dom';
import NavSite from './Navbar';

class AllArticles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universUrl: null,
      categoryUrl: null,
      sub_categoryUrl: null,
      isUnivers: null,
      isCategory: null,
      search: null
    }
  }
  async componentDidMount() {
    this.getInitialValue()
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const sub_category = await urlParams.get('sub-category');
    const category = await urlParams.get('category');
    const Univers = await urlParams.get('univers');
    this.setState({ universUrl: Univers, categoryUrl: category, sub_categoryUrl: sub_category })
  }

  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    if (e.target.value != null) {
      this.setState({
        [name]: e.target.value
      })
    }
    else {
      this.setState({ [name]: "nothing" })
    }

  }

  getInitialValue = () => {
    this.setState({
      universUrl: null,
      categoryUrl: null,
      sub_categoryUrl: null,
      isUnivers: null,
      isCategory: null,
      search: null

    }, () => console.log("worked"))
  }
  render() {
    const showArticles = this.props.articles.filter((article, key) => article.attributes.name.toLowerCase().includes(this.state.search && this.state.search.toLowerCase()))
    return (
      <>
        <NavSite panier={this.props.panier} getInitialValue={this.getInitialValue} />
        <nav class="panel">
          <h2 class="text-center">Affinage de recherche</h2>
          <input class="search-bar" type="text" name="search" value={this.state.search && this.state.search != "nothing" ? (this.state.search) : ("")} onChange={(e) => this.handleChange(e)}></input>
          <h2 class="text-center">Catégories</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir une Catégorie
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.categories && this.props.categories.map((category) =>
                category.attributes.name.toLowerCase() === window.location.href.substring(window.location.href.lastIndexOf('/') + 1) || this.state.isCategory === "Yes" ? (
                  this.state.isCategory === "Yes" ? (
                    <Dropdown.Item className="text-center"><Link to={"/" + category.attributes.name.toLowerCase()} onClick={() => this.getInitialValue()}>{category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={"/" + category.attributes.name.toLowerCase()} onClick={() => this.getInitialValue()}>{category.attributes.name}</Link></Dropdown.Item>,
                    this.setState({ isCategory: "Yes" })
                  )
                ) : (
                  this.state.sub_categoryUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + category.attributes.name.toLowerCase() + "?sub-category=" + this.state.sub_categoryUrl} onClick={() => this.setState({ categoryUrl: category.attributes.name.toLowerCase() })}>{category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + category.attributes.name.toLowerCase()} onClick={() => this.setState({ categoryUrl: category.attributes.name.toLowerCase() })}>{category.attributes.name}</Link></Dropdown.Item>
                  )

                )
              )}
            </Dropdown.Menu>
          </Dropdown>
          <h2 class="text-center">Sous-catégories</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir une Sous-catégorie
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.sub_categories && this.props.sub_categories.map((sub_category) =>
                this.state.categoryUrl != null ? (
                  <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?category=" + this.state.categoryUrl + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                ) : (
                  this.state.universUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + this.state.universUrl + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center" > <Link to={window.location.pathname + "?sub-category=" + sub_category.attributes.name.toLowerCase()} onClick={() => this.setState({ sub_categoryUrl: sub_category.attributes.name.toLowerCase() })}>{sub_category.attributes.name}</Link></Dropdown.Item>
                  )
                )
              )}
            </Dropdown.Menu>
          </Dropdown>
          <h2 class="text-center">Univers</h2>
          <Dropdown className="text-center">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown_search text-black">
              choisir un Univers
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.Universs && this.props.Universs.map((Univers) =>
                Univers.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) || this.state.isUnivers === "Yes" ? (
                  this.state.isUnivers === "Yes" ? (
                    <Dropdown.Item className="text-center"><Link to={"/" + Univers.attributes.name.toLowerCase()} onClick={() => this.getInitialValue()}>{Univers.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={"/" + Univers.attributes.name.toLowerCase()} onClick={() => this.getInitialValue()}>{Univers.attributes.name}</Link></Dropdown.Item>,
                    this.setState({ isUnivers: "Yes" })
                  )
                ) : (
                  this.state.sub_categoryUrl != null ? (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + Univers.attributes.name.toLowerCase() + "?sub-category=" + this.state.sub_categoryUrl} onClick={() => this.setState({ universUrl: Univers.attributes.name.toLowerCase() })}>{Univers.attributes.name}</Link></Dropdown.Item>
                  ) : (
                    <Dropdown.Item className="text-center"><Link to={window.location.pathname + "?univers=" + Univers.attributes.name.toLowerCase()} onClick={() => this.setState({ universUrl: Univers.attributes.name.toLowerCase() })}>{Univers.attributes.name}</Link></Dropdown.Item>
                  )

                )
              )}
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <Container className="contain_article">
          <Row>
            <Col className="around_articles" xs={{ offset: 5 }}>
              <Row xs={1} md={1} className="g-4">
                {
                  <>
                    {this.state.search != "nothing" && showArticles != "" ? (
                      showArticles.map((articles, i) =>
                        articles.attributes.category.data && articles.attributes.category.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) &&
                          this.state.universUrl === null && this.state.sub_categoryUrl === null ? (
                          <Col>
                            <Card className="carte">
                              {articles.attributes.image.data ? (
                                <>
                                  <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                  <Card.Body>
                                    <Card.Title className='titleCardImg'>
                                      {articles.attributes.name}
                                    </Card.Title>
                                    <Card.Text className='descCardImg'>
                                      {articles.attributes.description}
                                    </Card.Text>
                                    <Card.Text className="price">
                                      {articles.attributes.prix} €
                                    </Card.Text>
                                    <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                    <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                  </Card.Body>
                                </>
                              ) : (
                                <Card.Body>
                                  <Card.Title className='titleCard'>
                                    {articles.attributes.name}
                                  </Card.Title>
                                  <Card.Text className='descCard'>
                                    {articles.attributes.description}
                                  </Card.Text>
                                  <Card.Text className="price">
                                    {articles.attributes.prix} €
                                  </Card.Text>
                                  <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                  <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                </Card.Body>
                              )}
                            </Card>
                          </Col>
                        ) : (
                          this.state.universUrl != null && this.state.sub_categoryUrl != null && articles.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ||
                            this.state.categoryUrl != null && this.state.sub_categoryUrl != null && articles.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                            <Col>
                              <Card className="carte">
                                {articles.attributes.image.data ?
                                  <>
                                    <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                    <Card.Body>
                                      <Card.Title className='titleCardImg'>
                                        {articles.attributes.name}
                                      </Card.Title>
                                      <Card.Text className='descCardImg'>
                                        {articles.attributes.description}
                                      </Card.Text>
                                      <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                      <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                    </Card.Body>
                                  </> : (
                                    <Card.Body>
                                      <Card.Title className='titleCard'>
                                        {articles.attributes.name}
                                      </Card.Title>
                                      <Card.Text className='descCard'>
                                        {articles.attributes.description}
                                      </Card.Text>
                                      <Card.Text className="price">
                                        {articles.attributes.prix} €
                                      </Card.Text>
                                      <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                      <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                    </Card.Body>
                                  )}
                              </Card>
                            </Col>
                          ) : (
                            this.state.isUnivers != null && this.state.categoryUrl != null && this.state.sub_categoryUrl === null && articles.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl || this.state.isCategory != null && this.state.universUrl != null && this.state.sub_categoryUrl === null && articles.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl ? (
                              <Col>
                                <Card className="carte">
                                  {articles.attributes.image.data ?
                                    <>
                                      <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                      <Card.Body>
                                        <Card.Title className='titleCardImg'>
                                          {articles.attributes.name}
                                        </Card.Title>
                                        <Card.Text className='descCardImg'>
                                          {articles.attributes.description}
                                        </Card.Text>
                                        <Card.Text className="price">
                                          {articles.attributes.prix} €
                                        </Card.Text>
                                        <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                        <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                      </Card.Body>
                                    </> : (
                                      <Card.Body>
                                        <Card.Title className='titleCard'>
                                          {articles.attributes.name}
                                        </Card.Title>
                                        <Card.Text className='descCard'>
                                          {articles.attributes.description}
                                        </Card.Text>
                                        <Card.Text className="price">
                                          {articles.attributes.prix} €
                                        </Card.Text>
                                        <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                        <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                      </Card.Body>
                                    )}
                                </Card>
                              </Col>
                            ) : (
                              this.state.sub_categoryUrl != null && this.state.categoryUrl === null && this.state.universUrl === null && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                <Col>
                                  <Card className="carte">
                                    {articles.attributes.image.data ?
                                      <>
                                        <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                        <Card.Body>
                                          <Card.Title className='titleCardImg'>
                                            {articles.attributes.name}
                                          </Card.Title>
                                          <Card.Text className='descCardImg'>
                                            {articles.attributes.description}
                                          </Card.Text>
                                          <Card.Text className="price">
                                            {articles.attributes.prix} €
                                          </Card.Text>
                                          <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                          <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                        </Card.Body>
                                      </> : (
                                        <Card.Body>
                                          <Card.Title className='titleCard'>
                                            {articles.attributes.name}
                                          </Card.Title>
                                          <Card.Text className='descCard'>
                                            {articles.attributes.description}
                                          </Card.Text>
                                          <Card.Text className="price">
                                            {articles.attributes.prix} €
                                          </Card.Text>
                                          <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                          <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                        </Card.Body>
                                      )}
                                  </Card>
                                </Col>
                              ) : (
                                articles.attributes.univer.data &&
                                  articles.attributes.univer.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) &&
                                  this.state.categoryUrl === null && this.state.sub_categoryUrl === null ? (
                                  <Col>
                                    <Card className="carte">
                                      {articles.attributes.image.data ?
                                        <>
                                          <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                          <Card.Body>
                                            <Card.Title className='titleCardImg'>
                                              {articles.attributes.name}
                                            </Card.Title>
                                            <Card.Text className='descCardImg'>
                                              {articles.attributes.description}
                                            </Card.Text>
                                            <Card.Text className="price">
                                              {articles.attributes.prix} €
                                            </Card.Text>
                                            <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                            <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                          </Card.Body>
                                        </> : (
                                          <Card.Body>
                                            <Card.Title className='titleCard'>
                                              {articles.attributes.name}
                                            </Card.Title>
                                            <Card.Text className='descCard'>
                                              {articles.attributes.description}
                                            </Card.Text>
                                            <Card.Text className="price">
                                              {articles.attributes.prix} €
                                            </Card.Text>
                                            <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                            <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                          </Card.Body>
                                        )}
                                    </Card>
                                  </Col>
                                ) : (
                                  this.state.universUrl != null && this.state.sub_categoryUrl != null && articles.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ||
                                    this.state.categoryUrl != null && this.state.sub_categoryUrl != null && articles.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                    <Col>
                                      <Card className="carte">
                                        {articles.attributes.image.data ?
                                          <>
                                            <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                            <Card.Body>
                                              <Card.Title className='titleCardImg'>
                                                {articles.attributes.name}
                                              </Card.Title>
                                              <Card.Text className='descCardImg'>
                                                {articles.attributes.description}
                                              </Card.Text>
                                              <Card.Text className="price">
                                                {articles.attributes.prix} €
                                              </Card.Text>
                                              <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                              <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                            </Card.Body>
                                          </> : (
                                            <Card.Body>
                                              <Card.Title className='titleCard'>
                                                {articles.attributes.name}
                                              </Card.Title>
                                              <Card.Text className='descCard'>
                                                {articles.attributes.description}
                                              </Card.Text>
                                              <Card.Text className="price">
                                                {articles.attributes.prix} €
                                              </Card.Text>
                                              <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                              <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                            </Card.Body>
                                          )}
                                      </Card>
                                    </Col>
                                  ) : (
                                    this.state.isUnivers != null && this.state.categoryUrl != null && this.state.sub_categoryUrl === null && articles.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl || this.state.isCategory != null && this.state.universUrl != null && this.state.sub_categoryUrl === null && articles.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl ? (
                                      <Col>
                                        <Card className="carte">
                                          {articles.attributes.image.data ?
                                            <>
                                              <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                              <Card.Body>
                                                <Card.Title className='titleCardImg'>
                                                  {articles.attributes.name}
                                                </Card.Title>
                                                <Card.Text className='descCardImg'>
                                                  {articles.attributes.description}
                                                </Card.Text>
                                                <Card.Text className="price">
                                                  {articles.attributes.prix} €
                                                </Card.Text>
                                                <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                                <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                              </Card.Body>
                                            </> : (
                                              <Card.Body>
                                                <Card.Title className='titleCard'>
                                                  {articles.attributes.name}
                                                </Card.Title>
                                                <Card.Text className='descCard'>
                                                  {articles.attributes.description}
                                                </Card.Text>
                                                <Card.Text className="price">
                                                  {articles.attributes.prix} €
                                                </Card.Text>
                                                <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                                <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                              </Card.Body>
                                            )}
                                        </Card>
                                      </Col>
                                    ) : (
                                      this.state.sub_categoryUrl != null && this.state.categoryUrl === null && this.state.universUrl === null && articles.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                        < Col >
                                          <Card className="carte">
                                            {articles.attributes.image.data ?
                                              <>
                                                <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + articles.attributes.image.data[0].attributes.url} />
                                                <Card.Body>
                                                  <Card.Title className='titleCardImg'>
                                                    {articles.attributes.name}
                                                  </Card.Title>
                                                  <Card.Text className='descCardImg'>
                                                    {articles.attributes.description}
                                                  </Card.Text>
                                                  <Card.Text className="price">
                                                    {articles.attributes.prix} €
                                                  </Card.Text>
                                                  <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                                  <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                                </Card.Body>
                                              </> : (
                                                <Card.Body>
                                                  <Card.Title className='titleCard'>
                                                    {articles.attributes.name}
                                                  </Card.Title>
                                                  <Card.Text className='descCard'>
                                                    {articles.attributes.description}
                                                  </Card.Text>
                                                  <Card.Text className="price">
                                                    {articles.attributes.prix} €
                                                  </Card.Text>
                                                  <Link to={"/article/" + articles.id}><Button className="viewButton">View</Button></Link>
                                                  <Button className="BtnAddCart" onClick={() => this.props.addToCart(articles)}>Ajouter au Panier</Button>
                                                </Card.Body>
                                              )}
                                          </Card>
                                        </Col>
                                      ) : (
                                        ""
                                      )
                                    )
                                  )

                                )
                              )
                            )
                          )
                        )
                      )
                    ) : (
                      this.state.search === null ? (
                        this.props.articles && this.props.articles.map((article) =>
                          article.attributes.category.data && article.attributes.category.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) &&
                            this.state.universUrl === null && this.state.sub_categoryUrl === null ? (
                            <Col>
                              <Card className="carte">
                                {article.attributes.image.data ? (
                                  <>
                                    <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                    <Card.Body>
                                      <Card.Title className='titleCardImg'>
                                        {article.attributes.name}
                                      </Card.Title>
                                      <Card.Text className='descCardImg'>
                                        {article.attributes.description}
                                      </Card.Text>
                                      <Card.Text className="price">
                                        {article.attributes.prix} €
                                      </Card.Text>
                                      <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                      <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                    </Card.Body>
                                  </>
                                ) : (
                                  <Card.Body>
                                    <Card.Title className='titleCard'>
                                      {article.attributes.name}
                                    </Card.Title>
                                    <Card.Text className='descCard'>
                                      {article.attributes.description}
                                    </Card.Text>
                                    <Card.Text className="price">
                                      {article.attributes.prix} €
                                    </Card.Text>
                                    <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                    <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                  </Card.Body>
                                )}
                              </Card>
                            </Col>
                          ) : (
                            this.state.universUrl != null && this.state.sub_categoryUrl != null && article.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ||
                              this.state.categoryUrl != null && this.state.sub_categoryUrl != null && article.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                              <Col>
                                <Card className="carte">
                                  {article.attributes.image.data ?
                                    <>
                                      <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                      <Card.Body>
                                        <Card.Title className='titleCardImg'>
                                          {article.attributes.name}
                                        </Card.Title>
                                        <Card.Text className='descCardImg'>
                                          {article.attributes.description}
                                        </Card.Text>
                                        <Card.Text className="price">
                                          {article.attributes.prix} €
                                        </Card.Text>
                                        <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                        <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                      </Card.Body>
                                    </> : (
                                      <Card.Body>
                                        <Card.Title className='titleCard'>
                                          {article.attributes.name}
                                        </Card.Title>
                                        <Card.Text className='descCard'>
                                          {article.attributes.description}
                                        </Card.Text>
                                        <Card.Text className="price">
                                          {article.attributes.prix} €
                                        </Card.Text>
                                        <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                        <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                      </Card.Body>
                                    )}
                                </Card>
                              </Col>
                            ) : (
                              this.state.isUnivers != null && this.state.categoryUrl != null && this.state.sub_categoryUrl === null && article.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl || this.state.isCategory != null && this.state.universUrl != null && this.state.sub_categoryUrl === null && article.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl ? (
                                <Col>
                                  <Card className="carte">
                                    {article.attributes.image.data ?
                                      <>
                                        <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                        <Card.Body>
                                          <Card.Title className='titleCardImg'>
                                            {article.attributes.name}
                                          </Card.Title>
                                          <Card.Text className='descCardImg'>
                                            {article.attributes.description}
                                          </Card.Text>
                                          <Card.Text className="price">
                                            {article.attributes.prix} €
                                          </Card.Text>
                                          <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                          <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                        </Card.Body>
                                      </> : (
                                        <Card.Body>
                                          <Card.Title className='titleCard'>
                                            {article.attributes.name}
                                          </Card.Title>
                                          <Card.Text className='descCard'>
                                            {article.attributes.description}
                                          </Card.Text>
                                          <Card.Text className="price">
                                            {article.attributes.prix} €
                                          </Card.Text>
                                          <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                          <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                        </Card.Body>
                                      )}
                                  </Card>
                                </Col>
                              ) : (
                                this.state.sub_categoryUrl != null && this.state.categoryUrl === null && this.state.universUrl === null && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                  <Col>
                                    <Card className="carte">
                                      {article.attributes.image.data ?
                                        <>
                                          <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                          <Card.Body>
                                            <Card.Title className='titleCardImg'>
                                              {article.attributes.name}
                                            </Card.Title>
                                            <Card.Text className='descCardImg'>
                                              {article.attributes.description}
                                            </Card.Text>
                                            <Card.Text className="price">
                                              {article.attributes.prix} €
                                            </Card.Text>
                                            <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                            <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                          </Card.Body>
                                        </> : (
                                          <Card.Body>
                                            <Card.Title className='titleCard'>
                                              {article.attributes.name}
                                            </Card.Title>
                                            <Card.Text className='descCard'>
                                              {article.attributes.description}
                                            </Card.Text>
                                            <Card.Text className="price">
                                              {article.attributes.prix} €
                                            </Card.Text>
                                            <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                            <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                          </Card.Body>
                                        )}
                                    </Card>
                                  </Col>
                                ) : (
                                  article.attributes.univer.data &&
                                    article.attributes.univer.data.attributes.name.toLowerCase() === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) &&
                                    this.state.categoryUrl === null && this.state.sub_categoryUrl === null ? (
                                    <Col>
                                      <Card className="carte">
                                        {article.attributes.image.data ?
                                          <>
                                            <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                            <Card.Body>
                                              <Card.Title className='titleCardImg'>
                                                {article.attributes.name}
                                              </Card.Title>
                                              <Card.Text className='descCardImg'>
                                                {article.attributes.description}
                                              </Card.Text>
                                              <Card.Text className="price">
                                                {article.attributes.prix} €
                                              </Card.Text>
                                              <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                              <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                            </Card.Body>
                                          </> : (
                                            <Card.Body>
                                              <Card.Title className='titleCard'>
                                                {article.attributes.name}
                                              </Card.Title>
                                              <Card.Text className='descCard'>
                                                {article.attributes.description}
                                              </Card.Text>
                                              <Card.Text className="price">
                                                {article.attributes.prix} €
                                              </Card.Text>
                                              <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                              <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                            </Card.Body>
                                          )}
                                      </Card>
                                    </Col>
                                  ) : (
                                    this.state.universUrl != null && this.state.sub_categoryUrl != null && article.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ||
                                      this.state.categoryUrl != null && this.state.sub_categoryUrl != null && article.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                      <Col>
                                        <Card className="carte">
                                          {article.attributes.image.data ?
                                            <>
                                              <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                              <Card.Body>
                                                <Card.Title className='titleCardImg'>
                                                  {article.attributes.name}
                                                </Card.Title>
                                                <Card.Text className='descCardImg'>
                                                  {article.attributes.description}
                                                </Card.Text>
                                                <Card.Text className="price">
                                                  {article.attributes.prix} €
                                                </Card.Text>
                                                <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                              </Card.Body>
                                            </> : (
                                              <Card.Body>
                                                <Card.Title className='titleCard'>
                                                  {article.attributes.name}
                                                </Card.Title>
                                                <Card.Text className='descCard'>
                                                  {article.attributes.description}
                                                </Card.Text>
                                                <Card.Text className="price">
                                                  {article.attributes.prix} €
                                                </Card.Text>
                                                <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                              </Card.Body>
                                            )}
                                        </Card>
                                      </Col>
                                    ) : (
                                      this.state.isUnivers != null && this.state.categoryUrl != null && this.state.sub_categoryUrl === null && article.attributes.category.data.attributes.name.toLowerCase() === this.state.categoryUrl || this.state.isCategory != null && this.state.universUrl != null && this.state.sub_categoryUrl === null && article.attributes.univer.data.attributes.name.toLowerCase() === this.state.universUrl ? (
                                        <Col>
                                          <Card className="carte">
                                            {article.attributes.image.data ?
                                              <>
                                                <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                                <Card.Body>
                                                  <Card.Title className='titleCardImg'>
                                                    {article.attributes.name}
                                                  </Card.Title>
                                                  <Card.Text className='descCardImg'>
                                                    {article.attributes.description}
                                                  </Card.Text>
                                                  <Card.Text className="price">
                                                    {article.attributes.prix} €
                                                  </Card.Text>
                                                  <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                  <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                                </Card.Body>
                                              </> : (
                                                <Card.Body>
                                                  <Card.Title className='titleCard'>
                                                    {article.attributes.name}
                                                  </Card.Title>
                                                  <Card.Text className='descCard'>
                                                    {article.attributes.description}
                                                  </Card.Text>
                                                  <Card.Text className="price">
                                                    {article.attributes.prix} €
                                                  </Card.Text>
                                                  <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                  <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                                </Card.Body>
                                              )}
                                          </Card>
                                        </Col>
                                      ) : (
                                        this.state.sub_categoryUrl != null && this.state.categoryUrl === null && this.state.universUrl === null && article.attributes.sub_category.data.attributes.name.toLowerCase() === this.state.sub_categoryUrl ? (
                                          < Col >
                                            <Card className="carte">
                                              {article.attributes.image.data ?
                                                <>
                                                  <img class="ImgCard" variant="top" height="100px" width="100px" src={"http://localhost:1337" + article.attributes.image.data[0].attributes.url} />
                                                  <Card.Body>
                                                    <Card.Title className='titleCardImg'>
                                                      {article.attributes.name}
                                                    </Card.Title>
                                                    <Card.Text className='descCardImg'>
                                                      {article.attributes.description}
                                                    </Card.Text>
                                                    <Card.Text className="price">
                                                      {article.attributes.prix} €
                                                    </Card.Text>
                                                    <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                    <Button className="BtnAddCartImg" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                                  </Card.Body>
                                                </> : (
                                                  <Card.Body>
                                                    <Card.Title className='titleCard'>
                                                      {article.attributes.name}
                                                    </Card.Title>
                                                    <Card.Text className='descCard'>
                                                      {article.attributes.description}
                                                    </Card.Text>
                                                    <Card.Text className="price">
                                                      {article.attributes.prix} €
                                                    </Card.Text>
                                                    <Link to={"/article/" + article.id}><Button className="viewButton">View</Button></Link>
                                                    <Button className="BtnAddCart" onClick={() => this.props.addToCart(article)}>Ajouter au Panier</Button>
                                                  </Card.Body>
                                                )}
                                            </Card>
                                          </Col>
                                        ) : (
                                          ""
                                        )
                                      )
                                    )

                                  )
                                )
                              )
                            )
                          )
                        )
                      ) : (<h2 className='text-center'>Aucun article n'a été trouvé</h2>)
                    )}
                  </>
                }
              </Row></Col>
          </Row>
        </Container >
      </>
    );
  }
}

export default AllArticles;