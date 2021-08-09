import { useEntityDataListObj } from 'access';
import React from 'react';
import { AddProblemModal } from '../add-problem-modal';

export function ListProblem ({contestId}: {contestId: string}) {
    return <div className='list-problem'>
        <AddProblemModal contestId={contestId}/>
    </div>;
}