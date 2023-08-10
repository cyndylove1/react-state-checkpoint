

import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Nweke Cynthia',
        bio: 'A passionate React developer',
        imgSrc: 'https://lh3.googleusercontent.com/pw/AIL4fc_QXhZw10aFQllB2VExqAdeTb1x_F-lFDZ7nghgn29NCIZ12EpIo5XQXRXYcxfJRRPOw8c5o38-J3iFQuXaw4UhdH9y1PWkC2zXOwh5DSt9_HTw4A8uYoun_qiHgTtNHWVv9-zKlsaZmzsJcMjwJQbu12fRRppL-PeWfmKyBnnQkXALt8kgPsE_t9lbtnIPasbNykvYWE8ZozGTxHoQQ-qZbWgpHYrkdmYNHJ5uAgvtelRrGCNLaIol794u6YA_mK00WXtmh_-5J344WG5TDyZK88trAqp_i5krzLR6m_cjs8av67kZEbHrzY5m9ked__8vgOFCdL4aECRQeO7CKI_bV6l4n1QrVVXu5lulHh-tXqZmjl24SQI650IqoYm10Zasw87nHdcEtfjtoZCCMTj3diDyrwhpP6TS_4RgNvTMJP9Jkx2wtU-AGJVuZ4M9JdZkLvPvH-PXUp8gO3A7fNIQS37LJih-UJ_MxzYJp8E5ruzb65hE5RtPmbsnvRmUyVIUHpP6QH3sckY1ol7LwubVvmWVvg7VARGR2-fHUKS_Q-Igt8EYxnORVT5cKDPcjnNDWSrAaWcf9_8PfQKk8kFT1P4nVlWEpEXvv0ASPrWya4u9uXs4mTdYIqJlKEToQCCF8yxY83k0oFNNSthU-ziIptGfsHhaXqHViFLN7qYrR-9ZdmoB9RCCDluUMQYir1kXrFMQPfmvX7ZA1SJDBXMM6MUnX-L1_C1qZ7_AL0RUsEN0UsRsCJJMk0EGIDRdKP5l1D8263HwrKin3BJyElmBqRzkMj0UfaI2LqOP0uBSFNkcjeZrmixBTq97IcgWZkOuVCMaGWf8Jbnw7w-TaOrP2eibriBAOgkPGQCldeimXavZEizgXuEU3edvQFQmJVyD3wA9-zCVthsqbdAb0mK47g=w485-h905-s-no?authuser=0', // Placeholder image
        profession: 'Software Engineer'
      },
      show: false,
      interval: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} width={150} height={270}alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since last mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;

  