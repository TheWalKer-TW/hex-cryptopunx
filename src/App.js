import React, { useRef, useEffect, useState } from 'react';

import { Navbar } from './components';
import { isMobile } from 'react-device-detect';

import "./App.css"
import punx_gif from './assets/Punx.gif'
import preview_gif from './assets/Preview.gif'


const App = () => {

    const [amountToMint, setAmountToMint] = useState("1");

    const handleTransaction = () => {
        // Add some parameter to know if the transaction have been denied or fullfilled
        alert(`Your transaction have been parameter.`)
        // Also if we have more information about the error in the transaction we can display the error in the alert
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Amount selected to mint: ${amountToMint}`)

        // mint(amountToMint)();
    }

    if (!isMobile) {
    }
    if (isMobile) {
    }

    return (
        <div>

        {!isMobile &&
            <div className='container'>
                <div className='background'></div>
                <Navbar />

                <section className='title'>
                    <h1>CRYPTOPUNX</h1>
                </section>

                <section className='form-section'>
                    <div>
                        <img src={punx_gif} alt="cryptopunx gif" />
                    </div>
                    <span>MINT PRICE - 0.0169 ETH</span>
                    <span>TOTAL -/10000</span>
                    <form className='mint-form' onSubmit={handleSubmit}>
                        <input
                            type="number"
                            min="1"
                            max="30"
                            id='mint-amount-counter'
                            className='mint-amount-counter'
                            name='amount_to_mint'
                            value={amountToMint}
                            onChange={(e) => {
                                setAmountToMint(e.target.value)
                            }}
                            />
                        <input type="submit" className='submit-amount_to_mint' value="MINT" />
                    </form>
                </section>

                <section className='text-section'>
                    <div className='text-div'>
                        <p>The idea for CryptoPunx came from the release of Twitters hexagon nft profile pics. The project is being stealth launched with no need for discord grinding or giveaways for whitelist spots. Just a good old classic public mint. No max mint per transaction, no max per wallet.</p>
                        <p>The collection consists of 10,000 randomly generated nfts on the ethereum blockchain. Several traits have been removed from the original Cryptopunks attributes list and a few new traits introduced. Additionally, some traits that were gender specific will now be available for male and females.</p>
                        <p>What are our plans after launch? Well, we have some ideas but will take community feedback into account for what you would like to see! Future drops will be free to claim for Hex Cryptopunx holders!</p>
                    </div>
                    <div className='preview-div'>
                        <img src={preview_gif} alt="cryptopunx preview gif" />
                    </div>
                </section>
            </div>
        }
        {isMobile &&
            <div className='container_M'>
                <div className='background_M'></div>
                <Navbar />

                <section className='title_M'>
                    <h1 className='h1_M'>CRYPTOPUNX</h1>
                </section>

                <section className='form-section_M'>
                    <div>
                        <img src={punx_gif} alt="cryptopunx gif" />
                    </div>
                    <span>MINT PRICE - 0.0169 ETH</span>
                    <span>TOTAL -/10000</span>
                    <form className='mint-form_M' onSubmit={handleSubmit}>
                        <input
                            type="number"
                            min="1"
                            max="30"
                            id='mint-amount-counter'
                            className='mint-amount-counter_M'
                            name='amount_to_mint'
                            value={amountToMint}
                            onChange={(e) => {
                                setAmountToMint(e.target.value)
                            }}
                        />
                        <input type="submit" className='submit-amount_to_mint_M' value="MINT" />
                    </form>
                </section>

                <section className='text-section_M'>
                    <div className='text-div_M'>
                        <p>The idea for CryptoPunx came from the release of Twitters hexagon nft profile pics. The project is being stealth launched with no need for discord grinding or giveaways for whitelist spots. Just a good old classic public mint. No max mint per transaction, no max per wallet.</p>
                        <p>The collection consists of 10,000 randomly generated nfts on the ethereum blockchain. Several traits have been removed from the original Cryptopunks attributes list and a few new traits introduced. Additionally, some traits that were gender specific will now be available for male and females.</p>
                        <p>What are our plans after launch? Well, we have some ideas but will take community feedback into account for what you would like to see! Future drops will be free to claim for Hex Cryptopunx holders!</p>
                    </div>
                    <div className='preview-div_M'>
                        <img src={preview_gif} alt="cryptopunx preview gif" />
                    </div>
                </section>
            </div>
        }

        </div>

        // <div className='container'>
        //     <div className='background'></div>
        //     <Navbar />

        //     <section className='title'>
        //         <h1>HEX CRYPTOPUNX</h1>
        //     </section>

        //     <section className='form-section'>
        //         <div>
        //             <img src={punx_gif} alt="cryptopunx gif" />
        //         </div>
        //         <span>MINT PRICE - 0.0169 ETH</span>
        //         <span>TOTAL -/10000</span>
        //         <form className='mint-form' onSubmit={handleSubmit}>
        //             <input 
        //                 type="number"
        //                 min="1"
        //                 max="30"
        //                 id='mint-amount-counter'
        //                 className='mint-amount-counter'
        //                 name='amount_to_mint'
        //                 value={amountToMint}
        //                 onChange={(e) => {
        //                     setAmountToMint(e.target.value)
        //                 }}
        //             />
        //             <input type="submit" className='submit-amount_to_mint' value="MINT" />
        //         </form>
        //     </section>

        //     <section className='text-section'>
        //         <div className='text-div'>
        //             <p>The idea for Hex Cryptopunx came from the release of Twitters hexagon nft profile pics. The project is being stealth launched with no need for discord grinding or giveaways for whitelist spots. Just a good old classic public mint. No max mint per transaction, no max per wallet.</p>
        //             <p>The collection consists of 10,000 randomly generated nfts on the ethereum blockchain. Several traits have been removed from the original Cryptopunks attributes list and a few new traits introduced. Additionally, some traits that were gender specific will now be available for male and females.</p>
        //             <p>What are our plans after launch? Well, we have some ideas but will take community feedback into account for what you would like to see! Future drops will be free to claim for Hex Cryptopunx holders!</p>
        //         </div>
        //         <div className='preview-div'>
        //             <img src={preview_gif} alt="cryptopunx preview gif" />
        //         </div>
        //     </section>
        // </div>
    )
}

export default App
