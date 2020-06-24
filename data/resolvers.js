import mongoose from 'mongoose';

import { Friends, Aliens } from './dbConnectors';

// Create a resolver: a function that gives us, i.e. returns, the result of the query to GraphQL
const resolvers = {
  Query: {
    getOneFriend: (root, {id}) => {
      return new Promise((resolve, object) => {
        Friends.findById(id, (error, friend) => {
          if(error){
            reject(error);
          } else {
            resolve(friend);
          }
        })
      });
    },
    getAliens: () => {
      return Aliens.findAll();
    }
  },
  Mutation: {
    createFriend: (root, {input}) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts
      });
      newFriend.id = newFriend._id;
      return new Promise((resolve, object) => {
        newFriend.save((error) => {
          if(error) {
            reject(error);
          } else {
            resolve(newFriend);
          };
        })
      });
    },
    updateFriend: (root, {input}) => {
        return new Promise((resolve, object) => {
          Friends.findOneAndUpdate({_id: input.id}, input, {new: true}, (error, friend) => {
            if(error){
              reject(error);
            } else {
              resolve(friend);
            };
          })
        });
    },
    deleteFriend: (root, {id}) => {
      return new Promise((resolve, object) => {
        Friends.remove({_id: id}, (error) => {
          if(error){
            reject(error);
          } else {
            resolve('Successfully deleted friend.');
          }
        })
      });
    }
  }
};

export default resolvers;
