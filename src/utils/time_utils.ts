import ContestStatusEnum from 'const/contest_status';

const getContestStatus = (time_start: string | number | Date, time_end: string | number | Date):ContestStatusEnum  => {
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    const c_time_end:Date = new Date(time_end);
    const c_time_start:Date = new Date(time_start);
    const now = new Date();
    let status = now > c_time_end ? ContestStatusEnum.EXPIRED
        : (now < c_time_start ? ContestStatusEnum.UPCOMING
            : ContestStatusEnum.ONGOING);
    return status;
};

export {
    getContestStatus
};