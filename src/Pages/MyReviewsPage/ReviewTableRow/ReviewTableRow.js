import { Button, Label, Modal, Select, Table, Textarea, TextInput } from 'flowbite-react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReviewTableRow = ({ rev, handleUpdateReview, handleDeleteReview }) => {
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, resetField } = useForm();

    return (

        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {rev.serviceName}
            </Table.Cell>
            <Table.Cell>
                {rev.review}
            </Table.Cell>
            <Table.Cell>
                {rev.rating}
            </Table.Cell>
            <Table.Cell>
                <Button.Group outline={true}>
                    <Button color="failure" onClick={() => setVisible(true)}>
                        <FaEdit className="mr-3 h-4 w-4"></FaEdit>
                        {' '}Edit
                    </Button>
                    <React.Fragment>

                        <Modal
                            show={visible}
                            size="md"
                            popup={true}
                            onClose={() => setVisible(false)}
                        >
                            <Modal.Header />
                            <Modal.Body>
                                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Edit your Review
                                    </h3>
                                    <form onSubmit={handleSubmit((event) => handleUpdateReview(event, rev))} className="flex flex-col gap-4">
                                        <div id="select">
                                            <div className="mb-2 block text-start">
                                                <Label
                                                    htmlFor="rating"
                                                    value="Rate the service"
                                                />
                                            </div>
                                            <Select
                                                defaultValue={rev.rating}
                                                {...register('rating')}
                                                id="rating"
                                                required={true}
                                            >
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                            </Select>
                                        </div>
                                        <div id="textarea">
                                            <div className="mb-2 block text-start">
                                                <Label
                                                    htmlFor="review"
                                                    value="Your message"
                                                />
                                            </div>
                                            <Textarea
                                                defaultValue={rev.review}
                                                {...register('review')}
                                                id="review"
                                                placeholder="Leave a review..."
                                                required={true}
                                                rows={4}
                                            />
                                        </div>

                                        <Button type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </React.Fragment>
                    <Button onClick={()=> handleDeleteReview(rev)} color="failure">
                        <RiDeleteBinFill className="mr-3 h-4 w-4"></RiDeleteBinFill>
                        {' '}Delete
                    </Button>
                </Button.Group>
            </Table.Cell>
        </Table.Row>

    );
};

export default ReviewTableRow;