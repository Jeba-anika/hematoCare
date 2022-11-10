import React from 'react';
import { TitleChange } from '../../Title/ChangeTitle'


const Blogs = () => {
    return (
        <div>
            {TitleChange('Blogs')}
            <div className='border rounded-xl mt-10 p-4 text-start lg:w-3/4 mx-auto'>
                <h2 className='text-xl font-mono font-bold'>1.What is the Difference between SQL and NoSQL?</h2>
                <p>SQL database use Structured Query Language whereas NoSQL doesn't use
                    Structured Query Language . SQL or the Structured Query Language is the most common and popular programming language
                    for the relational database management system.
                    It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
                    NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form.
                    SQL databases are relational, NoSQL databases are non-relational.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases
                    are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
            </div>
            <div className='border rounded-xl mt-10 p-4 text-start lg:w-3/4 mx-auto'>
                <h2 className='text-xl font-mono font-bold'>2.What is JWT, and how does it work?</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                     Each JWT contains encoded JSON objects, including 
                    a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                     JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications.
                     It stores information in an easy-to-access manner, both for developers and computers. a token is a string of data that represents something else, 
                     such as an identity. So JSON web token works as an authentication system between client and server.</p>
            </div>
            <div className='border rounded-xl mt-10 p-4 text-start lg:w-3/4 mx-auto'>
                <h2 className='text-xl font-mono font-bold'>3.What is the difference between javascript and NodeJS?</h2>
                <p>Javascript is a programming language that is used for writing scripts on the website. 
                NodeJS is a Javascript runtime environment. Javascript can only run in the browsers. We can run Javascript outside the
                 browser with the help of NodeJS. Javascript is mostly used on the client side and NodeJS is mostly used on the server side.
                 Javascript can run in any browser engine and V8 is the Javascript engine inside of node.js that parses and runs Javascript. 
                 Javascript is used in frontend development.Nodejs is used in server-side development.
                    </p>
            </div>
            <div className='border rounded-xl mt-10 p-4 text-start lg:w-3/4 mx-auto mb-20'>
                <h2 className='text-xl font-mono font-bold'>4.How does NodeJS handle multiple requests at the same time?</h2>
                <p>Node.js is pretty famous for its event driven and async. It can handle N number of executions at the same time in single thread with single core.
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. 
                    NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;